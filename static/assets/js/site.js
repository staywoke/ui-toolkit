var templateReg = /(<\/?)template([\s\S]*?>)/ig;
var vueBeautifyDivReg = /(<\/?)vueBeautifyDiv([\s\S]*?>)/ig;
var samples = document.getElementsByTagName('pre');
var formatOptions = {
  indent_size: 4,
  indent_char: ' ',
  indent_with_tabs: true,
  eol: '\n',
  end_with_newline: true,
  indent_level: 4,
  preserve_newlines: true,
  max_preserve_newlines: 10,
  space_in_paren: true,
  space_in_empty_paren: true,
  jslint_happy: true,
  space_after_anon_function: true,
  brace_style: 'collapse',
  unindent_chained_methods: true,
  break_chained_methods: true,
  keep_array_indentation: true,
  unescape_strings: true,
  wrap_line_length: 0,
  e4x: false,
  comma_first: true,
  operator_position: 'before-newline'
}

function getIndent(level) {
    var result = '',
        i = level * 4;
    if (level < 0) {
        throw "Level is below 0";
    }
    while (i--) {
        result += ' ';
    }
    return result;
}

function format(html) {
  html = html.trim();
   var result = '',
       indentLevel = 0,
       tokens = html.split(/</);
   for (var i = 0, l = tokens.length; i < l; i++) {
       var parts = tokens[i].split(/>/);
       if (parts.length === 2) {
           if (tokens[i][0] === '/') {
               indentLevel--;
           }
           result += getIndent(indentLevel);
           if (tokens[i][0] !== '/') {
               indentLevel++;
           }

           if (i > 0) {
               result += '<';
           }

           result += parts[0].trim() + ">\n";
           if (parts[1].trim() !== '') {
               result += getIndent(indentLevel) + parts[1].trim().replace(/\s+/g, ' ') + "\n";
           }

           if (parts[0].match(/^(img|hr|br)/)) {
               indentLevel--;
           }
       } else {
           result += getIndent(indentLevel) + parts[0] + "\n";
       }
   }
   return result;
}

function beautifyVue(text) {
  if (!text) {
    return;
  }

  text = format(text);

  text = text.replace(templateReg, function(match, begin, end) {
    return begin + 'vueBeautifyDiv' + end;
  });
  text = html_beautify(text);
  return text.replace(vueBeautifyDivReg, function(match, begin, end) {
    return begin + 'template' + end;
  });
}

function highlightCode() {
  for (var i = 0; i < samples.length; i++) {
    if (typeof samples[i].textContent !== 'undefined' && samples[i].textContent !== '' && samples[i].classList.toString().indexOf('hljs') === -1) {
      var markup = beautifyVue(samples[i].textContent, formatOptions);
      var html = hljs.fixMarkup(hljs.highlightAuto(markup).value);
      samples[i].innerHTML = html;
      samples[i].classList.add('hljs');
    }
  }
}
