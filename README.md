# Command Line Notes App

A simple command-line application for managing notes using Node.js and the `yargs` package.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Example](#example)

## Installation

To get started with the Notes App, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. **Install dependencies**:

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

## Usage

You can use the application directly from the command line. Run the following command to see a list of available commands:

```bash
node app.js --help
```

## Commands

### `add`

Add a new note.

```bash
node app.js add --title "Note Title" --body "This is the body of the note."
```

### `remove`

Remove an existing note.

```bash
node app.js remove --title "Note Title"
```

### `list`

List all notes.

```bash
node app.js list
```

### `read`

Read a specific note by title.

```bash
node app.js read --title "Note Title"
```

## Example

Here's an example of how to add and then read a note:

1. Add a note:

   ```bash
   node app.js add --title "My First Note" --body "This is the body of my first note."
   ```

2. Read the note:

   ```bash
   node app.js read --title "My First Note"
   ```

3. List all the notes:

   ```bash
   node app.js list
   ```

4. Remove the note:

   ```bash
   node app.js remove --title "My First Note"
   ```
