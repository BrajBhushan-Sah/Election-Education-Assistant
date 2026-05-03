# Accessibility (A11y) Guidelines

To ensure the VotePath AI application is inclusive and usable for all citizens, including those relying on assistive technologies, all frontend development must strictly adhere to the following accessibility rules:

## Semantic Structure
1. **Headings**: Ensure exactly one clear `<h1>` tag per page for proper hierarchy.
2. **Landmarks**: Always use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) to define page regions.
3. **Skip Navigation**: Include a "Skip to content" link as the first focusable element on the page to bypass repetitive navigation links.

## Forms and Inputs
4. **Input Labels**: Every input element must have a clear, associated `<label>`.
5. **Error Linking**: Form validation error messages must be linked to their respective input fields using `aria-describedby` or `aria-errormessage`.

## Interaction & Keyboard Navigation
6. **Keyboard Access**: All buttons and interactive elements must be fully accessible and operable via keyboard (e.g., using `Enter` and `Space` to activate).
7. **Focus States**: Maintain highly visible focus rings for all interactive elements to support keyboard navigation.
8. **Dynamic Content**: Use ARIA live regions (`aria-live="polite"` or `aria-live="assertive"`) specifically for chatbot responses to ensure screen readers announce incoming messages.

## Visual and Media Accessibility
9. **Visual Accommodations**: Implement a High Contrast mode toggle to assist users with visual impairments.
10. **Typography Controls**: Provide a Font Size toggle to allow users to scale text dynamically.
11. **Localization**: Include a Language Selector for multi-lingual support, ensuring the `lang` attribute on the `<html>` tag updates dynamically.
12. **Alternative Text**: Provide meaningful `alt` text for all informative images and icons. Decorative images should use `alt=""`.
