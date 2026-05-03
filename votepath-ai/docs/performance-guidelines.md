# Performance and Optimization Guidelines

These rules dictate how the application handles performance, optimization, and API resource management:

## Frontend Optimizations
1. **Lazy Loading**: The `Dashboard` and `Quiz` pages must be lazy-loaded using React `lazy` and `Suspense` to reduce the initial bundle size.
2. **UI Feedback**: Use **loading skeletons** instead of plain spinners to improve perceived performance during data fetches.
3. **Input Handling**: Ensure the chat input is **debounced** so that we prevent excessive re-renders and unnecessary API calls.
4. **Caching**: Statically cache the election timeline content to avoid redundant backend requests for data that rarely changes.
5. **Static Assets**: Use CDN-hosted static assets wherever possible to improve global delivery speed.

## Backend & API Optimizations
1. **Firestore Query Limits**: Limit Firestore history queries (e.g., chat histories) to the latest **10 items** by default to prevent large payload bottlenecks.
2. **Pagination**: Implement pagination for the quiz history to handle large datasets effectively.
3. **Gemini Optimization**: Keep the Gemini prompts concise to minimize token usage and improve latency.
4. **File Compression**: Ensure any downloadable certificates (images/PDFs) are compressed on the server before sending to the client.
