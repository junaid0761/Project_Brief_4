# Restaurant Ordering System - MongoDB Collection Design

## 1. Users

- user_id
- name
- email
- password
- role
- phone
- status
- created_at

## 2. Customers

- customer_id
- name
- email
- phone
- address
- created_at

## 3. Categories

- category_id
- name
- description

## 4. MenuItems

- menu_item_id
- name
- description
- price
- category_id
- is_available
- image_url

## 5. Tables

- table_id
- table_number
- capacity
- status

## 6. Orders

- order_id
- order_number
- customer_id
- table_id
- user_id
- order_date
- status
- total_amount

## 7. OrderItems

- order_item_id
- order_id
- menu_item_id
- quantity
- unit_price
- subtotal

## 8. Payments

- payment_id
- order_id
- amount
- payment_method
- payment_date
- status
- transaction_ref