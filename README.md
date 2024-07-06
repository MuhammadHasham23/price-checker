# Price Tracker Application

A Node.js application that tracks prices of Amazon products and sends email notifications when prices drop. Built with Express, TypeScript, MongoDB, and Cheerio.

## Features

- **Track Prices**: Monitor prices of products from various e-commerce websites.
- **Email Notifications**: Receive email alerts when the price of a tracked product drops.
- **Scheduled Price Checks**: Regularly check the prices of tracked products using cron jobs.
- **Request Validation**: Ensure valid request data using AJV (Another JSON Schema Validator).

## Features to be added

- **Monitoring**: Adding monitoring for cron job and API health
- **Support for other stores**: Adding support for other stores as well.

## Prerequisites

- Node.js
- MongoDB
- A Gmail account for sending email notifications

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/price-tracker.git
    cd price-tracker
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory with the following content:**

    ```env
    MONGODB_URI=mongodb://localhost:27017/price-tracker
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    PORT=3000
    BASE_URL=http://localhost:3000
    ```

4. **Build the project:**

    ```bash
    npm run build
    ```

5. **Start the application:**

    ```bash
    npm start
    ```

## Development

1. **Start the application in development mode:**

    ```bash
    npm run dev
    ```

2. **Lint the code:**

    ```bash
    npm run lint
    ```

## API Endpoints

### Track Product

- **URL**: `/api/track`
- **Method**: `POST`
- **Description**: Start tracking a product's price.
- **Request Body**:

    ```json
    {
      "url": "https://example.com/product",
      "email": "user@example.com"
    }
    ```

- **Response**:

    ```json
    {
      "message": "Tracking started",
      "price": 29.99
    }
    ```

### Check Prices

- **URL**: `/api/check`
- **Method**: `GET`
- **Description**: Manually trigger a price check for all tracked products.
- **Response**:

    ```json
    {
      "message": "Prices checked"
    }
    ```

## Project Structure

```plaintext
src/
  ├── jobs/
  │   └── priceChecker.ts
  ├── middleware/
  │   └── validateRequest.ts
  ├── models/
  │   └── Product.ts
  ├── routes/
  │   └── index.ts
  ├── schemas/
  │   └── product.ts
  ├── services/
  │   ├── notifier.ts
  │   └── scraper.ts
  ├── app.ts
  └── server.ts
```
# Contributing
1. Fork the repository
2. Create a new branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin feature/your-feature
5. Create a new Pull Request