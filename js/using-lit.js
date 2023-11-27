import {html, render} from 'https://cdn.skypack.dev/lit';
const name = 'Josh Perez';
const element = html`
    ${name}
`;

render(
    element,
    document.getElementById('root')
);
