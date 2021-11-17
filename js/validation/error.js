function errorMessage(message = "Oh no, something happened trying to call the API.") {
    const html = `<div class="error">${message}</div>`;

    return html;
}