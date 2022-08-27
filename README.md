# Pokedex

This project was created to test some new tools that we need implement on other projects.

## Technical Choices

- The core of project will be created with NextJs because of easily router and file organization.
- The UI system will be made with MUI react, because of his great popularity and because is that the main ui tool on the other projects.
- The state management will be made with Redux Toolkit because his performance and tis popularity.

## Project Documentation

### Creating a new page/route

1. Create a new file on `pages` folder, just with calling the layout file.
2. Create a new folder on `screens` folder to keep the page's layout.
3. Create new folders to pages components at `components` folder to minimize the screens files.

### Components and screens folders

The folder structure for screens and components will be like this:

- src
  - Screens
    - Home
      - index.tsx
      - types.ts
      - styles.ts
  - Components
    - Header
      - index.tsx
      - types.ts
      - styles.ts

### Coponents and screens states

All the components and screens that need API data to be rendered will need have 4 layout states:

1. Empty state (with no data)
2. Loading state
3. Error state
4. Filled state (with API data)