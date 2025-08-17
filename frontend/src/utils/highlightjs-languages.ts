/* eslint-disable import/extensions */
import hljs from 'highlight.js/lib/core.js';
import bash from 'highlight.js/lib/languages/bash.js';
import diff from 'highlight.js/lib/languages/diff.js';
import dos from 'highlight.js/lib/languages/dos.js';
import groovy from 'highlight.js/lib/languages/groovy.js';
import java from 'highlight.js/lib/languages/java.js';
import markdown from 'highlight.js/lib/languages/markdown.js';
import properties from 'highlight.js/lib/languages/properties.js';
import plaintext from 'highlight.js/lib/languages/plaintext.js';
import xml from 'highlight.js/lib/languages/xml.js';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('dos', dos);
hljs.registerLanguage('groovy', groovy);
hljs.registerLanguage('java', java);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('properties', properties);
hljs.registerLanguage('plaintext', plaintext);
hljs.registerLanguage('xml', xml);

export default hljs;
