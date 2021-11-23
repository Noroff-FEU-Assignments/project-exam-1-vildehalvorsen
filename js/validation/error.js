function errorMessage(message = "Something happened trying to call the API. Try to reload the browser.") {
    const html = `<div class="error">${message}</div>`;

    return html;
}