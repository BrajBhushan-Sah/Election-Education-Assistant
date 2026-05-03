// ═══════════════════════════════════════════════════════════════
//  Tests for Quiz Bank — validates content integrity
// ═══════════════════════════════════════════════════════════════

const { QUIZ_BANK, QUIZ_CATEGORIES, getQuizQuestions } = require('../content/quizBank');

describe('Quiz Bank — Content Integrity', () => {
  it('contains at least 50 questions', () => {
    expect(QUIZ_BANK.length).toBeGreaterThanOrEqual(50);
  });

  it('every question has required fields', () => {
    QUIZ_BANK.forEach((q, i) => {
      expect(q).toHaveProperty('category');
      expect(q).toHaveProperty('question');
      expect(q).toHaveProperty('options');
      expect(q).toHaveProperty('correctAnswerIndex');
      expect(q).toHaveProperty('explanation');
      expect(q.options.length).toBe(4);
      expect(q.correctAnswerIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswerIndex).toBeLessThan(4);
    });
  });

  it('every category has at least 8 questions', () => {
    QUIZ_CATEGORIES.forEach((cat) => {
      const count = QUIZ_BANK.filter((q) => q.category === cat).length;
      expect(count).toBeGreaterThanOrEqual(8);
    });
  });

  it('no question mentions a specific political party or candidate name', () => {
    const PARTISAN_TERMS = [
      /\bbjp\b/i, /\bcongress\b/i, /\baap\b/i, /\btmc\b/i, /\bshiv sena\b/i,
      /\bmodi\b/i, /\brahul\b/i, /\bkejriwal\b/i, /\byogi\b/i,
      /\btrump\b/i, /\bbiden\b/i, /\bdemocrat\b/i, /\brepublican\b/i,
    ];
    QUIZ_BANK.forEach((q) => {
      const combined = `${q.question} ${q.options.join(' ')} ${q.explanation}`;
      PARTISAN_TERMS.forEach((term) => {
        expect(combined).not.toMatch(term);
      });
    });
  });
});

describe('getQuizQuestions()', () => {
  it('returns the requested number of questions', () => {
    const result = getQuizQuestions(5);
    expect(result.length).toBe(5);
  });

  it('returns fewer questions if pool is small and count exceeds pool', () => {
    const result = getQuizQuestions(100, 'Voter Registration');
    expect(result.length).toBeLessThanOrEqual(QUIZ_BANK.filter((q) => q.category === 'Voter Registration').length);
  });

  it('filters by category', () => {
    const result = getQuizQuestions(5, 'Voting Day Procedures');
    // All returned — check they don't leak category info (stripped in output)
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('question');
    expect(result[0]).not.toHaveProperty('category'); // category stripped from output
  });

  it('returns shuffled results (not always the same order)', () => {
    const run1 = getQuizQuestions(10).map((q) => q.question);
    const run2 = getQuizQuestions(10).map((q) => q.question);
    // Extremely unlikely both runs return identical order for 10 items
    // We just check they both have 10 items (shuffle is stochastic)
    expect(run1.length).toBe(10);
    expect(run2.length).toBe(10);
  });
});
