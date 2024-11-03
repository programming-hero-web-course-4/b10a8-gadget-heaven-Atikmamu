## Key React Concepts Used

- **React Router**: For page navigation across Home, Details, Dashboard, and 404 pages.
- **Context API**: To manage global state for the shopping cart and wishlist.
- **React Hooks**: Includes `useState`, `useEffect`, `useContext`, `useNavigate`, and `useLocation`.
- **Conditional Rendering**: For toggling views and dynamically updating components based on user interactions.
- **Local Storage**: Used for data persistence, allowing cart and wishlist data to remain available after page reloads.

## Data Management

- **Context API** is used for managing the global state, enabling seamless data flow across components like the cart, wishlist, and navbar.
- **Local Storage**: To persist cart and wishlist data, ensuring items remain available even after refreshing or closing the page.

## Key Features

- **Structured Navigation**:
    - Dynamic navigation bar with active route indication and consistent footer.
    - Includes links to the home, dashboard, and stats pages, and adjusts dynamically per page.

- **Product Display and Filtering**:
    - Displays products in a grid with category filtering.
    - Provides details for each product, including image, price, and description.

- **Cart and Wishlist Management**:
    - Allows users to add items to the cart and wishlist.
    - Provides badge counts in the navbar, showing the number of items in the cart.
    - The wishlist prevents duplicate entries with a disabled button after the first addition.

- **Price Sorting and Purchase Modal**:
    - Users can sort cart items by price in descending order.
    - Includes a purchase modal with a congratulatory message after checkout, resetting the cart and redirecting to the home page.

- **Error Handling and Edge Cases**:
    - Handles reload errors gracefully, displaying a 404 page when necessary.
    - Limits the cart total to $1000, with feedback for users if the limit is reached.

## Optional Features (Challenge Tasks)

- **Statistics Page**: Visualize product data on a chart with price vs. product name and rating.
- **Dynamic Page Titles and Favicon**: Page titles adjust based on route for better SEO and user experience.