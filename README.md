# 💻 Profile Card Component

A modern, accessible, and responsive user profile card built with native web technologies (HTML, CSS, JavaScript).

This component showcases core user information in a clean, high-contrast dark theme, emphasizing accessibility and modern frontend implementation.

### 🌐 Live Preview

Explore the live component hosted via GitHub Pages:
**[https://codexpro-dev.github.io/Profile-Card/]**

---

### ✨ Key Features

| Feature | Description | Technical Implementation |
| :--- | :--- | :--- |
| **Accessibility & Focus** | All interactive elements (social links, avatar upload) are fully navigable via the keyboard, featuring highly visible focus indicators. | Semantic `<a>` tags and custom `:focus` styling. |
| **Dynamic Responsiveness** | The layout adapts seamlessly from mobile (stacked) to tablet/desktop (side-by-side) views, ensuring content integrity across devices. | Modern Flexbox and CSS Media Queries. |
| **Real-Time Data Display** | Displays the current time as a continuous, updating **Unix Timestamp (milliseconds)**. | Vanilla JavaScript using `Date.now()` and `setInterval`. |
| **Dynamic Avatar Update** | Allows users to select a local image file. The component instantly updates the profile photo using a temporary, browser-generated URL. | JavaScript `URL.createObjectURL()` logic. |
| **Clean Semantic Structure** | Built using contemporary, meaningful HTML tags (`<article>`, `<figure>`, `<nav>`) to ensure high SEO and assistive technology compatibility. | Standard HTML5 Semantic Tags. |

---

### 🚀 Running the Project Locally

To run and test the component on your machine, follow these simple steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/codexpro-dev/Profile-Card.git]
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd Profile-Card
    ```
3.  **Launch the Component:**
    Simply open the **`index.html`** file in your preferred web browser (e.g., via a Live Server extension or right-click $\rightarrow$ "Open with").

---

### ⚙️ Technical Notes for Testing

* **Testing Hooks:** The entire component structure is instrumented with unique **`data-testid`** attributes on every visual element. This allows for stable, reliable end-to-end testing against the UI.
* **External Linking:** All social media links utilize **`target="_blank" rel="noopener noreferrer"`** for security and user experience when navigating to external sites.
* **Time Data Format:** The element displaying the time produces a large integer value, matching the exact millisecond output of JavaScript's `Date.now()`.
