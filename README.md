#  Shop Inventory Management System

A full-stack **Shop Inventory Management System** built with **Spring Boot (backend)** and **React (frontend)**. This project simplifies inventory management for shops by enabling functionalities such as adding, editing, deleting, and searching for items. It also provides a clean and user-friendly interface.

---

## Features

### Backend:
- **CRUD Operations**: Built RESTful APIs for creating, reading, updating, and deleting inventory items.
- **Spring Boot**: Utilized Spring Boot to develop a scalable and maintainable backend.
- **Database Integration**: 
  - Connected to a MySQL database using **Spring Data JPA**.
  - Implemented robust data persistence mechanisms for managing inventory items.
- **CORS Configuration**: Configured CORS to ensure seamless communication between the backend and frontend during development.

### Frontend:
- **React-based UI**:
  - Designed a responsive user interface with **Tailwind CSS**.
  - Developed features for item management, including dynamic forms for adding and updating items.
- **Real-time Search**: Implemented search functionality to filter inventory items dynamically.
- **Error Handling**: Provided user-friendly error messages for network or API issues.

---

## My Contributions

- **Backend Development**: 
  - Designed and implemented REST APIs for inventory management.
  - Solved issues with CORS configuration to enable frontend-backend communication.
  - Thoroughly tested and debugged API endpoints in Postman to ensure correct functionality.
  - Enhanced database integration using MySQL and optimized schema design for storing inventory data.

- **Frontend Development**:
  - Developed interactive React components for item addition, deletion, editing, and searching.
  - Styled components with Tailwind CSS for a modern, responsive UI.
  - Handled edge cases in forms (e.g., input validation and user feedback).

- **Integration**:
  - Debugged API connectivity issues by ensuring proper port configurations and resolving frontend-backend mismatch.

---

## Challenges Faced and Solutions

### 1. **CORS Issues:**
   - **Problem:** The frontend was unable to communicate with the backend due to CORS restrictions.
   - **Solution:** Added a dedicated `CorsConfig` class in the backend with appropriate allowed origins and methods to resolve the issue.

### 2. **Port Conflicts:**
   - **Problem:** Backend port 5000 was in use, causing server startup failures.
   - **Solution:** Identified and killed conflicting processes using `lsof` and `kill` commands. Changed the backend port to 8080 for better compatibility.

### 3. **API Connectivity Issues:**
   - **Problem:** API endpoints were functional in Postman but not in the frontend.
   - **Solution:** Ensured the frontend API base URL matched the backend port (`http://localhost:8080`) for seamless connectivity.

### 4. **Form Handling in React:**
   - **Problem:** Could not add all input fields (e.g., name, quantity, price, and description) properly in the `AddItem` form.
   - **Solution:** Fixed state handling and ensured all fields were properly mapped to the API request payload.

---

## Future Enhancements

1. **Advanced Features**:
   - Inventory categorization (e.g., electronics, groceries).
   - Analytics dashboard for visualizing inventory trends (e.g., stock levels, most sold items).

2. **Integration with Barcode Scanning**:
   - Implement barcode scanning functionality to streamline item management.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Spring Boot, Spring Data JPA
- **Database**: MySQL
- **Tools**: IntelliJ IDEA, Postman, Maven, Git

---

## Pages

### 1. Home Page
*Displays options to add items and search inventory.*

### 2. Item List Page
*View, edit, or delete inventory items.*
