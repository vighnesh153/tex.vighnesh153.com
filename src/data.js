const data = [
  {
    name: "Basic",
    inputs: [
      { name: 'Space', code: '\\:', nameAsIs: true },
      { name: 'Quad', code: '\\quad', nameAsIs: true },
      { name: 'Enter', code: '\\\\', nameAsIs: true },
      { name: '\\cdot', code: '\\cdot' },
      { name: '.', code: '.' },
      { name: '+', code: '+' },
      { name: '*', code: '*' },
      { name: '-', code: '-' },
      { name: '\\div', code: '\\div' },
      { name: '\\times', code: '\\times' },
      { name: '=', code: '=' },
      { name: '\\neq', code: '\\neq' },
      { name: '\\dotsm', code: '\\dotsm' },
      { name: '\\dotso', code: '\\dotso' },
      { name: '\\vdots', code: '\\vdots' },
      { name: '\\ddots', code: '\\ddots' },
      { name: ',', code: ',' },
      { name: '`', code: '`' },
      { name: '!', code: '!' },
      { name: ';', code: ';' },
      { name: '?', code: '?' },
      { name: '\\colon', code: '\\colon' },
      { name: '\\acute{x}', code: '\\acute{x}' },
      { name: '\\bar{x}', code: '\\bar{x}' },
      { name: '\\vec{x}', code: '\\vec{x}' },
      { name: '\\widetilde{x}', code: '\\widetilde{x}' },
      { name: '\\grave{x}', code: '\\grave{x}' },
      { name: '\\breve{x}', code: '\\breve{x}' },
      { name: '\\dot{x}', code: '\\dot{x}' },
      { name: '\\widehat{x}', code: '\\widehat{x}' },
      { name: '\\ddot{x}', code: '\\ddot{x}' },
      { name: '\\check{x}', code: '\\check{x}' },
      { name: '\\tilde{x}', code: '\\tilde{x}' },
      { name: '\\hat{x}', code: '\\hat{x}' },
      { name: '\\dddot{x}', code: '\\dddot{x}' },
      { name: '\\backslash', code: '\\backslash' },
      { name: '/', code: '/' },
      { name: '\\smallsetminus', code: '\\smallsetminus' },
      { name: '|', code: '|' },
      { name: '\\arrowvert', code: '\\arrowvert' },
      { name: '\\lvert', code: '\\lvert' },
      { name: '\\rvert', code: '\\rvert' },
      { name: '\\bracevert', code: '\\bracevert' },
      { name: '\\lVert', code: '\\lVert' },
      { name: '\\rVert', code: '\\rVert' },
      { name: '\\lgroup', code: '\\lgroup' },
      { name: '\\rgroup', code: '\\rgroup' },
      { name: '[', code: '[' },
      { name: ']', code: ']' },
      { name: '\\langle', code: '\\langle' },
      { name: '\\rangle', code: '\\rangle' },
      { name: '\\lmoustache', code: '\\lmoustache' },
      { name: '\\rmoustache', code: '\\rmoustache' },
      { name: '\\lbrace', code: '\\lbrace' },
      { name: '\\rbrace', code: '\\rbrace' },
      { name: '\\lceil', code: '\\lceil' },
      { name: '\\rceil', code: '\\rceil' },
      { name: '\\lfloor', code: '\\lfloor' },
      { name: '\\rfloor', code: '\\rfloor' },
    ],
  },
  {
    name: "Math",
    inputs: [
      { name: '\\int', code: '\\displaystyle\\int' },
      { name: '\\int_{a}^{b}', code: '\\displaystyle\\int_{a}^{b}' },
      { name: '\\oint', code: '\\displaystyle\\oint' },
      { name: '\\oint_{a}^{b}', code: '\\displaystyle\\oint_{a}^{b}' },
      { name: '\\sum', code: '\\displaystyle\\sum' },
      { name: '\\sum_{a}^{b}', code: '\\displaystyle\\sum_{a}^{b}' },
      { name: '\\coprod', code: '\\displaystyle\\coprod' },
      { name: '\\coprod_{a}^{b}', code: '\\displaystyle\\coprod_{a}^{b}' },
      { name: '\\prod', code: '\\displaystyle\\prod' },
      { name: '\\prod_{a}^{b}', code: '\\displaystyle\\prod_{a}^{b}' },
      { name: '\\bigcap', code: '\\displaystyle\\bigcap' },
      { name: '\\bigcap_{a}^{b}', code: '\\displaystyle\\bigcap_{a}^{b}' },
      { name: '\\bigcup', code: '\\displaystyle\\bigcup' },
      { name: '\\bigcup_{a}^{b}', code: '\\displaystyle\\bigcup_{a}^{b}' },
      { name: '\\bigsqcup', code: '\\displaystyle\\bigsqcup' },
      { name: '\\bigsqcup_{a}^{b}', code: '\\displaystyle\\bigsqcup_{a}^{b}' },
      { name: '\\bigvee', code: '\\displaystyle\\bigvee' },
      { name: '\\bigvee_{a}^{b}', code: '\\displaystyle\\bigvee_{a}^{b}' },
      { name: '\\bigwedge', code: '\\displaystyle\\bigwedge' },
      { name: '\\bigwedge_{a}^{b}', code: '\\displaystyle\\bigwedge_{a}^{b}' },
      { name: '\\sqrt{a}', code: '\\displaystyle\\sqrt{a}' },
      { name: '\\sqrt[n]{a}', code: '\\displaystyle\\sqrt[n]{a}' },
      { name: '\\lg{a}', code: '\\displaystyle\\lg{a}' },
      { name: '\\log_{a}{b}', code: '\\displaystyle\\log_{a}{b}' },
      { name: '{a}^{b}', code: '\\displaystyle{a}^{b}' },
      { name: '{a}_{b}', code: '\\displaystyle{a}_{b}' },
      { name: '{x}_{a}^{b}', code: '\\displaystyle{x}_{a}^{b}' },
      { name: '\\overleftarrow{a}', code: '\\displaystyle\\overleftarrow{a}' },
      { name: '\\overrightarrow{a}', code: '\\displaystyle\\overrightarrow{a}' },
      { name: '\\overbrace{a}', code: '\\displaystyle\\overbrace{a}' },
      { name: '\\underbrace{a}', code: '\\displaystyle\\underbrace{a}' },
      { name: '\\underline{a}', code: '\\displaystyle\\underline{a}' },
      { name: '\\overline{a}', code: '\\displaystyle\\overline{a}' },
      { name: '\\frac{a}{b}', code: '\\displaystyle\\frac{a}{b}' },
      { name: '\\frac{\\partial a}{\\partial b}', code: '\\displaystyle\\frac{\\partial a}{\\partial b}' },
      { name: '\\frac{\\text{d}x}{\\text{d}y}', code: '\\displaystyle\\frac{\\text{d}x}{\\text{d}y}' },
      { name: '\\lim_{a \\rightarrow b}', code: '\\displaystyle\\lim_{a \\rightarrow b}' },
      { name: '', code: '' },
      { name: '', code: '' },
    ],
  },
  {
    name: "Formula",
    inputs: [
      { name: '\\displaystyle\\sum\\limits_{i=0}^n i^3', code: '\\displaystyle\\sum\\limits_{i=0}^n i^3' },
      { name: '\\left(\\begin{array}{c} a \\\\ b \\end{array}\\right)', code: '\\left(\\begin{array}{c} a \\\\ b \\end{array}\\right)' },
      { name: '\\left(\\frac{a^2}{b^3}\\right)', code: '\\left(\\frac{a^2}{b^3}\\right)' },
      { name: '\\left.\\frac{a^3}{3}\\right|_0^1', code: '\\left.\\frac{a^3}{3}\\right|_0^1' },
      { name: '\\begin{bmatrix}a & b \\\\c & d \\end{bmatrix}', code: '\\begin{bmatrix}a & b \\\\c & d \\end{bmatrix}' },
      { name: '\\begin{cases}a & x = 0\\\\b & x > 0\\end{cases}', code: '\\begin{cases}a & x = 0\\\\b & x > 0\\end{cases}' },
      { name: '\\sqrt{\\frac{n}{n-1} S}', code: '\\sqrt{\\frac{n}{n-1} S}' },
      { name: '\\begin{pmatrix} \\alpha& \\beta^{*}\\\\ \\gamma^{*}& \\delta \\end{pmatrix}', code: '\\begin{pmatrix} \\alpha& \\beta^{*}\\\\ \\gamma^{*}& \\delta \\end{pmatrix}' },
      { name: 'A\\:\\xleftarrow{n+\\mu-1}\\:B', code: 'A\\:\\xleftarrow{n+\\mu-1}\\:B' },
      { name: 'B\\:\\xrightarrow[T]{n\\pm i-1}\\:C', code: 'B\\:\\xrightarrow[T]{n\\pm i-1}\\:C' },
      { name: '\\frac{1}{k}\\log_2 c(f)\\;', code: '\\displaystyle\\frac{1}{k}\\log_2 c(f)\\;' },
      { name: '\\iint\\limits_A f(x,y)\\;', code: '\\displaystyle\\iint\\limits_A f(x,y)\\;' },
      { name: 'x^n + y^n = z^n', code: 'x^n + y^n = z^n' },
      { name: 'E=mc^2', code: 'E=mc^2' },
      { name: 'e^{\\pi i} - 1 = 0', code: 'e^{\\pi i} - 1 = 0' },
      { name: 'p(x) = 3x^6', code: 'p(x) = 3x^6' },
      { name: '3x + y =  12', code: '3x + y =  12' },
      { name: '\\int_0^\\infty \\mathrm{e}^{-x}\\,\\mathrm{d}x', code: '\\displaystyle\\int_0^\\infty \\mathrm{e}^{-x}\\,\\mathrm{d}x' },
      { name: '\\sqrt[n]{1+x+x^2+\\ldots}', code: '\\displaystyle\\sqrt[n]{1+x+x^2+\\ldots}' },
      { name: '\\binom{x}{y} = \\frac{x!}{y!(x-y)!}', code: '\\displaystyle\\binom{x}{y} = \\frac{x!}{y!(x-y)!}' },
      { name: '\\frac{\\frac{1}{x}+\\frac{1}{y}}{y-z}', code: '\\displaystyle\\frac{\\frac{1}{x}+\\frac{1}{y}}{y-z}' },
      { name: 'f(x)=\\frac{P(x)}{Q(x)}', code: '\\displaystyle f(x)=\\frac{P(x)}{Q(x)}' },
      { name: '\\frac{1+\\frac{a}{b}}{1+\\frac{1}{1+\\frac{1}{a}}}', code: '\\displaystyle\\frac{1+\\frac{a}{b}}{1+\\frac{1}{1+\\frac{1}{a}}}' },
      { name: '\\sum_{\\substack{0\\le i\\le m\\\\ 0\\lt j\\lt n}} P(i,j)', code: '\\displaystyle\\sum_{\\substack{0\\le i\\le m\\\\ 0\\lt j\\lt n}} P(i,j)' },
      { name: '\\lim_{x \\to \\infty} \\exp(-x) = 0', code: '\\displaystyle\\lim_{x \\to \\infty} \\exp(-x) = 0' },
      { name: '\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta', code: '\\displaystyle\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta' },
    ],
  },
  {
    name: "Arrows",
    inputs: [
      { name: '\\uparrow', code: '\\uparrow' },
      { name: '\\downarrow', code: '\\downarrow' },
      { name: '\\updownarrow', code: '\\updownarrow' },
      { name: '\\Uparrow', code: '\\Uparrow' },
      { name: '\\Downarrow', code: '\\Downarrow' },
      { name: '\\Leftarrow', code: '\\Leftarrow' },
      { name: '\\Rightarrow', code: '\\Rightarrow' },
      { name: '\\Leftrightarrow', code: '\\Leftrightarrow' },
      { name: '\\nLeftrightarrow', code: '\\nLeftrightarrow' },
      { name: '\\nLeftarrow', code: '\\nLeftarrow' },
      { name: '\\nRightarrow', code: '\\nRightarrow' },
      { name: '\\Updownarrow', code: '\\Updownarrow' },
      { name: '\\circlearrowleft', code: '\\circlearrowleft' },
      { name: '\\circlearrowright', code: '\\circlearrowright' },
      { name: '\\Lleftarrow', code: '\\Lleftarrow' },
      { name: '\\Rrightarrow', code: '\\Rrightarrow' },
      { name: '\\nwarrow', code: '\\nwarrow' },
      { name: '\\swarrow', code: '\\swarrow' },
      { name: '\\searrow', code: '\\searrow' },
      { name: '\\nearrow', code: '\\nearrow' },
      { name: '\\longleftarrow', code: '\\longleftarrow' },
      { name: '\\longrightarrow', code: '\\longrightarrow' },
      { name: '\\rightarrow', code: '\\rightarrow' },
      { name: '\\leftarrow', code: '\\leftarrow' },
      { name: '\\mapsto', code: '\\mapsto' },
      { name: '\\nrightarrow', code: '\\nrightarrow' },
      { name: '\\nleftarrow', code: '\\nleftarrow' },
      { name: '\\rightrightarrows', code: '\\rightrightarrows' },
      { name: '\\leftleftarrows', code: '\\leftleftarrows' },
      { name: '\\rightleftarrows', code: '\\rightleftarrows' },
      { name: '\\leftrightarrows', code: '\\leftrightarrows' },
      { name: '\\curvearrowleft', code: '\\curvearrowleft' },
      { name: '\\curvearrowright', code: '\\curvearrowright' },
      { name: '\\Longleftarrow', code: '\\Longleftarrow' },
      { name: '\\Longrightarrow', code: '\\Longrightarrow' },
      { name: '\\longleftrightarrow', code: '\\longleftrightarrow' },
      { name: '\\Longleftrightarrow', code: '\\Longleftrightarrow' },
      { name: '\\longmapsto', code: '\\longmapsto' },
      { name: '\\rightarrowtail', code: '\\rightarrowtail' },
      { name: '\\leftarrowtail', code: '\\leftarrowtail' },
      { name: "\\downdownarrows", code: "\\downdownarrows" },
      { name: "\\upuparrows", code: "\\upuparrows" },
      { name: "\\rightharpoondown", code: "\\rightharpoondown" },
      { name: "\\downharpoonleft", code: "\\downharpoonleft" },
      { name: "\\rightharpoonup", code: "\\rightharpoonup" },
      { name: "\\downharpoonright", code: "\\downharpoonright" },
      { name: "\\upharpoonleft", code: "\\upharpoonleft" },
      { name: "\\upharpoonright", code: "\\upharpoonright" },
      { name: "\\leftharpoondown", code: "\\leftharpoondown" },
      { name: "\\leftharpoonup", code: "\\leftharpoonup" },
      { name: "\\hookleftarrow", code: "\\hookleftarrow" },
      { name: "\\hookrightarrow", code: "\\hookrightarrow" },
      { name: "\\rightleftharpoons", code: "\\rightleftharpoons" },
      { name: "\\leftrightharpoons", code: "\\leftrightharpoons" },
      { name: "\\looparrowleft", code: "\\looparrowleft" },
      { name: "\\looparrowright", code: "\\looparrowright" },
      { name: "\\rightsquigarrow", code: "\\rightsquigarrow" },
      { name: "\\Lsh", code: "\\Lsh" },
      { name: "\\Rsh", code: "\\Rsh" },
      { name: "\\multimap", code: "\\multimap" },
      { name: "\\twoheadleftarrow", code: "\\twoheadleftarrow" },
      { name: "\\twoheadrightarrow", code: "\\twoheadrightarrow" },
      { name: "\\leftrightarrow", code: "\\leftrightarrow" },
      { name: "\\nleftrightarrow", code: "\\nleftrightarrow" },
      { name: "\\leftrightsquigarrow", code: "\\leftrightsquigarrow" },
    ],
  },
  {
    name: 'Alphabets',
    inputs: [
      { name: "\\aleph", code: "\\aleph" },
      { name: "\\Gamma", code: "\\Gamma" },
      { name: "\\alpha", code: "\\alpha" },
      { name: "\\xi", code: "\\xi" },
      { name: "\\digamma", code: "\\digamma" },
      { name: "\\Delta", code: "\\Delta" },
      { name: "\\beta", code: "\\beta" },
      { name: "\\pi", code: "\\pi" },
      { name: "\\varepsilon", code: "\\varepsilon" },
      { name: "\\Lambda", code: "\\Lambda" },
      { name: "\\gamma", code: "\\gamma" },
      { name: "\\rho", code: "\\rho" },
      { name: "\\varkappa", code: "\\varkappa" },
      { name: "\\Phi", code: "\\Phi" },
      { name: "\\delta", code: "\\delta" },
      { name: "\\sigma", code: "\\sigma" },
      { name: "\\varphi", code: "\\varphi" },
      { name: "\\Pi", code: "\\Pi" },
      { name: "\\epsilon", code: "\\epsilon" },
      { name: "\\tau", code: "\\tau" },
      { name: "\\varpi", code: "\\varpi" },
      { name: "\\Psi", code: "\\Psi" },
      { name: "\\zeta", code: "\\zeta" },
      { name: "\\upsilon", code: "\\upsilon" },
      { name: "\\varrho", code: "\\varrho" },
      { name: "\\Sigma", code: "\\Sigma" },
      { name: "\\eta", code: "\\eta" },
      { name: "\\phi", code: "\\phi" },
      { name: "\\varsigma", code: "\\varsigma" },
      { name: "\\Theta", code: "\\Theta" },
      { name: "\\theta", code: "\\theta" },
      { name: "\\chi", code: "\\chi" },
      { name: "\\vartheta", code: "\\vartheta" },
      { name: "\\Upsilon", code: "\\Upsilon" },
      { name: "\\iota", code: "\\iota" },
      { name: "\\psi", code: "\\psi" },
      { name: "\\Xi", code: "\\Xi" },
      { name: "\\kappa", code: "\\kappa" },
      { name: "\\omega", code: "\\omega" },
      { name: "\\Omega", code: "\\Omega" },
      { name: "\\lambda", code: "\\lambda" },
      { name: "\\mu", code: "\\mu" },
      { name: "\\nu", code: "\\nu" },
      { name: "\\complement", code: "\\complement" },
      { name: "\\hslash", code: "\\hslash" },
      { name: "\\circledS", code: "\\circledS" },
      { name: "\\Im", code: "\\Im" },
      { name: "\\beth", code: "\\beth" },
      { name: "\\ell", code: "\\ell" },
      { name: "\\mho", code: "\\mho" },
      { name: "\\Bbbk", code: "\\Bbbk" },
      { name: "\\Re", code: "\\Re" },
      { name: "\\daleth", code: "\\daleth" },
      { name: "\\eth", code: "\\eth" },
      { name: "\\partial", code: "\\partial" },
      { name: "\\Finv", code: "\\Finv" },
      { name: "\\gimel", code: "\\gimel" },
      { name: "\\hbar", code: "\\hbar" },
      { name: "\\wp", code: "\\wp" },
      { name: "\\Game", code: "\\Game" },
    ],
  },
  {
    name: 'Symbols',
    inputs: [
      { name: "\\#", code: "\\#" },
      { name: "\\clubsuit", code: "\\clubsuit" },
      { name: "\\lozenge", code: "\\lozenge" },
      { name: "\\square", code: "\\square" },
      { name: "\\&", code: "\\&" },
      { name: "\\diagdown", code: "\\diagdown" },
      { name: "\\measuredangle", code: "\\measuredangle" },
      { name: "\\surd", code: "\\surd" },
      { name: "\\angle", code: "\\angle" },
      { name: "\\diagup", code: "\\diagup" },
      { name: "\\nabla", code: "\\nabla" },
      { name: "\\top", code: "\\top" },
      { name: "\\backprime", code: "\\backprime" },
      { name: "\\diamondsuit", code: "\\diamondsuit" },
      { name: "\\natural", code: "\\natural" },
      { name: "\\triangle", code: "\\triangle" },
      { name: "\\bigstar", code: "\\bigstar" },
      { name: "\\emptyset", code: "\\emptyset" },
      { name: "\\neg", code: "\\neg" },
      { name: "\\triangledown", code: "\\triangledown" },
      { name: "\\blacklozenge", code: "\\blacklozenge" },
      { name: "\\exists", code: "\\exists" },
      { name: "\\nexists", code: "\\nexists" },
      { name: "\\varnothing", code: "\\varnothing" },
      { name: "\\blacksquare", code: "\\blacksquare" },
      { name: "\\flat", code: "\\flat" },
      { name: "\\prime", code: "\\prime" },
      { name: "\\blacktriangle", code: "\\blacktriangle" },
      { name: "\\forall", code: "\\forall" },
      { name: "\\sharp", code: "\\sharp" },
      { name: "\\blacktriangledown", code: "\\blacktriangledown" },
      { name: "\\heartsuit", code: "\\heartsuit" },
      { name: "\\spadesuit", code: "\\spadesuit" },
      { name: "\\bot", code: "\\bot" },
      { name: "\\infty", code: "\\infty" },
      { name: "\\sphericalangle", code: "\\sphericalangle" },
    ],
  },
  {
    name: 'Operators',
    inputs: [
      { name: "\\mp", code: "\\mp" },
      { name: "\\doteqdot", code: "\\doteqdot" },
      { name: "\\gtrless", code: "\\gtrless" },
      { name: "\\doublebarwedge", code: "\\doublebarwedge" },
      { name: "\\gtrdot", code: "\\gtrdot" },
      { name: "\\eqsim", code: "\\eqsim" },
      { name: "\\gvertneqq", code: "\\gvertneqq" },
      { name: "\\ngeqq", code: "\\ngeqq" },
      { name: "\\leqq", code: "\\leqq" },
      { name: "\\ngtr", code: "\\ngtr" },
      { name: "\\sim", code: "\\sim" },
      { name: "\\circ", code: "\\circ" },
      { name: "\\intercal", code: "\\intercal" },
      { name: "\\amalg", code: "\\amalg" },
      { name: "\\circledast", code: "\\circledast" },
      { name: "\\leftthreetimes", code: "\\leftthreetimes" },
      { name: "\\star", code: "\\star" },
      { name: "\\ast", code: "\\ast" },
      { name: "\\circledcirc", code: "\\circledcirc" },
      { name: "\\lessdot", code: "\\lessdot" },
      { name: "\\barwedge", code: "\\barwedge" },
      { name: "\\circleddash", code: "\\circleddash" },
      { name: "\\ltimes", code: "\\ltimes" },
      { name: "\\bigcirc", code: "\\bigcirc" },
      { name: "\\odot", code: "\\odot" },
      { name: "\\uplus", code: "\\uplus" },
      { name: "\\curlyvee", code: "\\curlyvee" },
      { name: "\\ominus", code: "\\ominus" },
      { name: "\\vee", code: "\\vee" },
      { name: "\\boxdot", code: "\\boxdot" },
      { name: "\\curlywedge", code: "\\curlywedge" },
      { name: "\\oplus", code: "\\oplus" },
      { name: "\\veebar", code: "\\veebar" },
      { name: "\\boxminus", code: "\\boxminus" },
      { name: "\\dagger", code: "\\dagger" },
      { name: "\\oslash", code: "\\oslash" },
      { name: "\\wedge", code: "\\wedge" },
      { name: "\\boxplus", code: "\\boxplus" },
      { name: "\\ddagger", code: "\\ddagger" },
      { name: "\\otimes", code: "\\otimes" },
      { name: "\\wr", code: "\\wr" },
      { name: "\\boxtimes", code: "\\boxtimes" },
      { name: "\\diamond", code: "\\diamond" },
      { name: "\\pm", code: "\\pm" },
      { name: "\\bullet", code: "\\bullet" },
      { name: "\\rightthreetimes", code: "\\rightthreetimes" },
      { name: "\\divideontimes", code: "\\divideontimes" },
      { name: "\\rtimes", code: "\\rtimes" },
      { name: "\\dotplus", code: "\\dotplus" },
      { name: "\\setminus", code: "\\setminus" },
      { name: "\\eqslantless", code: "\\eqslantless" },
      { name: "\\equiv", code: "\\equiv" },
      { name: "\\leqslant", code: "\\leqslant" },
      { name: "\\nleq", code: "\\nleq" },
      { name: "\\simeq>", code: "\\simeq>" },
      { name: "\\fallingdotseq", code: "\\fallingdotseq" },
      { name: "\\lessapprox", code: "\\lessapprox" },
      { name: "\\lesseqgtr", code: "\\lesseqgtr" },
      { name: "\\nleqslant", code: "\\nleqslant" },
      { name: "\\nleqq", code: "\\nleqq" },
      { name: "\\succ", code: "\\succ" },
      { name: "\\approx", code: "\\approx" },
      { name: "\\geq", code: "\\geq" },
      { name: "\\succapprox", code: "\\succapprox" },
      { name: "\\approxeq", code: "\\approxeq" },
      { name: "\\geqq", code: "\\geqq" },
      { name: "\\lesseqqgtr", code: "\\lesseqqgtr" },
      { name: "\\nless", code: "\\nless" },
      { name: "\\succcurlyeq", code: "\\succcurlyeq" },
      { name: "\\asymp", code: "\\asymp" },
      { name: "\\geqslant", code: "\\geqslant" },
      { name: "\\lessgtr", code: "\\lessgtr" },
      { name: "\\nprec", code: "\\nprec" },
      { name: "\\succeq", code: "\\succeq" },
      { name: "\\backsim", code: "\\backsim" },
      { name: "\\gg", code: "\\gg" },
      { name: "\\lesssim", code: "\\lesssim" },
      { name: "\\npreceq", code: "\\npreceq" },
      { name: "\\succnapprox", code: "\\succnapprox" },
      { name: "\\backsimeq", code: "\\backsimeq" },
      { name: "\\ggg", code: "\\ggg" },
      { name: "\\ll", code: "\\ll" },
      { name: "\\nsim", code: "\\nsim" },
      { name: "\\succneqq", code: "\\succneqq" },
      { name: "\\bumpeq", code: "\\bumpeq" },
      { name: "\\gnapprox", code: "\\gnapprox" },
      { name: "\\lll", code: "\\lll" },
      { name: "\\nsucc", code: "\\nsucc" },
      { name: "\\succnsim", code: "\\succnsim" },
      { name: "\\Bumpeq", code: "\\Bumpeq" },
      { name: "\\gneq", code: "\\gneq" },
      { name: "\\lnapprox", code: "\\lnapprox" },
      { name: "\\nsucceq", code: "\\nsucceq" },
      { name: "\\succsim", code: "\\succsim" },
      { name: "\\circeq", code: "\\circeq" },
      { name: "\\gneqq", code: "\\gneqq" },
      { name: "\\lneq", code: "\\lneq" },
      { name: "\\prec", code: "\\prec" },
      { name: "\\thickapprox", code: "\\thickapprox" },
      { name: "\\cong", code: "\\cong" },
      { name: "\\gnsim", code: "\\gnsim" },
      { name: "\\lneqq", code: "\\lneqq" },
      { name: "\\precapprox", code: "\\precapprox" },
      { name: "\\thicksim", code: "\\thicksim" },
      { name: "\\curlyeqprec", code: "\\curlyeqprec" },
      { name: "\\gtrapprox", code: "\\gtrapprox" },
      { name: "\\lnsim", code: "\\lnsim" },
      { name: "\\preccurlyeq", code: "\\preccurlyeq" },
      { name: "\\curlyeqsucc", code: "\\curlyeqsucc" },
      { name: "\\gtreqless", code: "\\gtreqless" },
      { name: "\\lvertneqq", code: "\\lvertneqq" },
      { name: "\\preceq", code: "\\preceq" },
      { name: "\\doteq", code: "\\doteq" },
      { name: "\\gtreqqless", code: "\\gtreqqless" },
      { name: "\\ncong", code: "\\ncong" },
      { name: "\\precnapprox", code: "\\precnapprox" },
      { name: "\\precneqq", code: "\\precneqq" },
      { name: "\\eqcirc", code: "\\eqcirc" },
      { name: "\\gtrsim", code: "\\gtrsim" },
      { name: "\\ngeq", code: "\\ngeq" },
      { name: "\\precnsim", code: "\\precnsim" },
      { name: "\\precsim", code: "\\precsim" },
      { name: "\\eqslantgtr", code: "\\eqslantgtr" },
      { name: "\\leq", code: "\\leq" },
      { name: "\\ngeqslant", code: "\\ngeqslant" },
      { name: "\\risingdotseq", code: "\\risingdotseq" },
      { name: "\\backepsilon", code: "\\backepsilon" },
      { name: "\\smallsmile", code: "\\smallsmile" },
      { name: "\\therefore", code: "\\therefore" },
      { name: "\\because", code: "\\because" },
      { name: "\\smile", code: "\\smile" },
      { name: "\\between", code: "\\between" },
      { name: "\\varpropto", code: "\\varpropto" },
      { name: "\\bowtie", code: "\\bowtie" },
      { name: "\\dashv", code: "\\dashv" },
      { name: "\\frown", code: "\\frown" },
      { name: "\\smallfrown", code: "\\smallfrown" },
      { name: "\\nvdash", code: "\\nvdash" },
      { name: "\\in", code: "\\in" },
      { name: "\\nVdash", code: "\\nVdash" },
      { name: "\\mid", code: "\\mid" },
      { name: "\\nvDash", code: "\\nvDash" },
      { name: "\\models", code: "\\models" },
      { name: "\\nVDash", code: "\\nVDash" },
      { name: "\\ni", code: "\\ni" },
      { name: "\\parallel", code: "\\parallel" },
      { name: "\\vdash", code: "\\vdash" },
      { name: "\\nmid", code: "\\nmid" },
      { name: "\\perp", code: "\\perp" },
      { name: "\\Vdash", code: "\\Vdash" },
      { name: "\\notin", code: "\\notin" },
      { name: "\\pitchfork", code: "\\pitchfork" },
      { name: "\\vDash", code: "\\vDash" },
      { name: "\\propto", code: "\\propto" },
      { name: "\\Vvdash", code: "\\Vvdash" },
      { name: "\\nshortmid", code: "\\nshortmid" },
      { name: "\\shortmid", code: "\\shortmid" },
      { name: "\\nparallel", code: "\\nparallel" },
      { name: "\\nshortparallel", code: "\\nshortparallel" },
      { name: "\\shortparallel", code: "\\shortparallel" },
      { name: "\\triangleleft", code: "\\triangleleft" },
      { name: "\\vartriangle", code: "\\vartriangle" },
      { name: "\\triangleright", code: "\\triangleright" },
      { name: "\\ntrianglerighteq", code: "\\ntrianglerighteq" },
      { name: "\\vartriangleright", code: "\\vartriangleright" },
      { name: "\\vartriangleleft", code: "\\vartriangleleft" },
      { name: "\\ntriangleright", code: "\\ntriangleright" },
      { name: "\\blacktriangleright", code: "\\blacktriangleright" },
      { name: "\\ntrianglelefteq", code: "\\ntrianglelefteq" },
      { name: "\\trianglerighteq", code: "\\trianglerighteq" },
      { name: "\\blacktriangleleft", code: "\\blacktriangleleft" },
      { name: "\\ntriangleleft", code: "\\ntriangleleft" },
      { name: "\\trianglelefteq", code: "\\trianglelefteq" },
      { name: "\\bigtriangledown", code: "\\bigtriangledown" },
      { name: "\\bigtriangleup", code: "\\bigtriangleup" },
      { name: "\\triangleq", code: "\\triangleq" },
      { name: "\\sqcap", code: "\\sqcap" },
      { name: "\\sqcup", code: "\\sqcup" },
      { name: "\\sqsupset", code: "\\sqsupset" },
      { name: "\\sqsubset", code: "\\sqsubset" },
      { name: "\\sqsupseteq", code: "\\sqsupseteq" },
      { name: "\\sqsubseteq", code: "\\sqsubseteq" },
      { name: "\\Cap", code: "\\Cap" },
      { name: "\\Cup", code: "\\Cup" },
      { name: "\\Subset", code: "\\Subset" },
      { name: "\\Supset", code: "\\Supset" },
      { name: "\\cup", code: "\\cup" },
      { name: "\\cap", code: "\\cap" },
      { name: "\\subset", code: "\\subset" },
      { name: "\\supset", code: "\\supset" },
      { name: "\\subseteq", code: "\\subseteq" },
      { name: "\\subseteqq", code: "\\subseteqq" },
      { name: "\\varsubsetneq", code: "\\varsubsetneq" },
      { name: "\\subsetneqq", code: "\\subsetneqq" },
      { name: "\\varsubsetneqq", code: "\\varsubsetneqq" },
      { name: "\\nsubseteqq", code: "\\nsubseteqq" },
      { name: "\\subsetneq", code: "\\subsetneq" },
      { name: "\\nsubseteq", code: "\\nsubseteq" },
      { name: "\\supseteq", code: "\\supseteq" },
      { name: "\\supseteqq", code: "\\supseteqq" },
      { name: "\\supsetneq", code: "\\supsetneq" },
      { name: "\\varsupsetneq", code: "\\varsupsetneq" },
      { name: "\\nsupseteq", code: "\\nsupseteq" },
      { name: "\\supsetneqq", code: "\\supsetneqq" },
      { name: "\\varsupsetneqq", code: "\\varsupsetneqq" },
      { name: "\\nsupseteqq", code: "\\nsupseteqq" },
      { name: "\\bigodot", code: "\\bigodot" },
      { name: "\\bigotimes", code: "\\bigotimes" },
      { name: "\\bigoplus", code: "\\bigoplus" },
      { name: "\\biguplus", code: "\\biguplus" },
    ],
  },
  {
    name: 'Functions',
    inputs: [
      { name: "\\sin", code: "\\sin" },
      { name: "\\cos", code: "\\cos" },
      { name: "\\tan", code: "\\tan" },
      { name: "\\csc", code: "\\csc" },
      { name: "\\sec", code: "\\sec" },
      { name: "\\cot", code: "\\cot" },
      { name: "\\sinh", code: "\\sinh" },
      { name: "\\cosh", code: "\\cosh" },
      { name: "\\tanh", code: "\\tanh" },
      { name: "\\coth", code: "\\coth" },
      { name: "\\hom", code: "\\hom" },
      { name: "\\arcsin", code: "\\arcsin" },
      { name: "\\arccos", code: "\\arccos" },
      { name: "\\det", code: "\\det" },
      { name: "\\arctan", code: "\\arctan" },
      { name: "\\textrm{arccsc}", code: "\\textrm{arccsc}" },
      { name: "\\textrm{arcsec}", code: "\\textrm{arcsec}" },
      { name: "\\textrm{arccot}", code: "\\textrm{arccot}" },
      { name: "\\sin^{-1}", code: "\\sin^{-1}" },
      { name: "\\cos^{-1}", code: "\\cos^{-1}" },
      { name: "\\tan^{-1}", code: "\\tan^{-1}" },
      { name: "\\sinh^{-1}", code: "\\sinh^{-1}" },
      { name: "\\cosh^{-1}", code: "\\cosh^{-1}" },
      { name: "\\tanh^{-1}", code: "\\tanh^{-1}" },
      { name: "\\exp", code: "\\exp" },
      { name: "\\lg", code: "\\lg" },
      { name: "\\ln", code: "\\ln" },
      { name: "\\log", code: "\\log" },
      { name: "\\log_{e}", code: "\\log_{e}" },
      { name: "\\log_{10}", code: "\\log_{10}" },
      { name: "\\lim", code: "\\lim" },
      { name: "\\liminf", code: "\\liminf" },
      { name: "\\limsup", code: "\\limsup" },
      { name: "\\max", code: "\\max" },
      { name: "\\min", code: "\\min" },
      { name: "\\infty", code: "\\infty" },
      { name: "\\inf", code: "\\inf" },
      { name: "\\arg", code: "\\arg" },
      { name: "\\det", code: "\\det" },
      { name: "\\dim", code: "\\dim" },
      { name: "\\gcd", code: "\\gcd" },
      { name: "\\hom", code: "\\hom" },
      { name: "\\ker", code: "\\ker" },
      { name: "\\Pr", code: "\\Pr" },
      { name: "\\sup", code: "\\sup" },
      { name: "\\deg", code: "\\deg" },
      { name: "\\injlim", code: "\\injlim" },
      { name: "\\varinjlim", code: "\\varinjlim" },
      { name: "\\varprojlim", code: "\\varprojlim" },
      { name: "\\varliminf", code: "\\varliminf" },
      { name: "\\projlim", code: "\\projlim" },
      { name: "\\varlimsup", code: "\\varlimsup" },
    ],
  },
  {
    name: 'Fonts',
    inputs: [
      { name: "\\tiny Tiny", code: "\\tiny Tiny" },
      { name: "\\scriptsize Script", code: "\\scriptsize Script" },
      { name: "\\small Small", code: "\\small Small" },
      { name: "\\normalsize Normal", code: "\\normalsize Normal" },
      { name: "\\large large", code: "\\large large" },
      { name: "\\Large Large", code: "\\Large Large" },
      { name: "\\LARGE LARGE", code: "\\LARGE LARGE" },
      { name: "\\huge huge", code: "\\huge huge" },
      { name: "\\Huge Huge", code: "\\Huge Huge" },
      { name: "\\mathbf{Bold}", code: "\\mathbf{Bold}" },
      { name: "\\mathit{Italic}", code: "\\mathit{Italic}" },
      { name: "\\mathrm{Roman}", code: "\\mathrm{Roman}" },
      { name: "\\mathcal{Mathcal}", code: "\\mathcal{Mathcal}" },
      { name: "\\mathscr{Script}", code: "\\mathscr{Script}" },
      { name: "\\mathfrak{Fraktur}", code: "\\mathfrak{Fraktur}" },
      { name: "\\mathbb{Blackboard}", code: "\\mathbb{Blackboard}" },
      { name: "\\mathsf{Sans Serif}", code: "\\mathsf{Sans Serif}" },
      { name: "\\mathtt{Typewriter}", code: "\\mathtt{Typewriter}" },
    ],
  },
  {
    name: 'Colors',
    inputs: [
      { name: "{\\color[RGB]{0,255,255} Aqua}", code: "{\\color[RGB]{0,255,255} Aqua}" },
      { name: "{\\color[RGB]{0,0,0} Black}", code: "{\\color[RGB]{0,0,0} Black}" },
      { name: "{\\color[RGB]{0,0,255} Blue}", code: "{\\color[RGB]{0,0,255} Blue}" },
      { name: "{\\color[RGB]{255,0,0} Red}", code: "{\\color[RGB]{255,0,0} Red}" },
      { name: "{\\color[RGB]{0,255,0} Lime}", code: "{\\color[RGB]{0,255,0} Lime}" },
      { name: "{\\color[RGB]{255,255,0} Yellow}", code: "{\\color[RGB]{255,255,0} Yellow}" },
      { name: "{\\color[RGB]{255,0,255} Magenta}", code: "{\\color[RGB]{255,0,255} Magenta}" },
      { name: "{\\color[RGB]{192,192,192} Silver}", code: "{\\color[RGB]{192,192,192} Silver}" },
      { name: "{\\color[RGB]{128,128,128} Gray}", code: "{\\color[RGB]{128,128,128} Gray}" },
      { name: "{\\color[RGB]{128,0,0} Maroon}", code: "{\\color[RGB]{128,0,0} Maroon}" },
      { name: "{\\color[RGB]{128,128,0} Olive}", code: "{\\color[RGB]{128,128,0} Olive}" },
      { name: "{\\color[RGB]{0,128,0} Green}", code: "{\\color[RGB]{0,128,0} Green}" },
      { name: "{\\color[RGB]{128,0,128} Purple}", code: "{\\color[RGB]{128,0,128} Purple}" },
      { name: "{\\color[RGB]{0,128,128} Teal}", code: "{\\color[RGB]{0,128,128} Teal}" },
      { name: "{\\color[RGB]{0,0,128} Navy}", code: "{\\color[RGB]{0,0,128} Navy}" },
      { name: "{\\color[RGB]{250,128,114} Salmon}", code: "{\\color[RGB]{250,128,114} Salmon}" },
      { name: "{\\color[RGB]{255,127,80} Coral}", code: "{\\color[RGB]{255,127,80} Coral}" },
      { name: "{\\color[RGB]{255,69,0} Orange red}", code: "{\\color[RGB]{255,69,0} Orange red}" },
      { name: "{\\color[RGB]{255,165,0} Orange}", code: "{\\color[RGB]{255,165,0} Orange}" },
      { name: "{\\color[RGB]{255,215,0} Gold}", code: "{\\color[RGB]{255,215,0} Gold}" },
      { name: "{\\color[RGB]{0,128,0} Green}", code: "{\\color[RGB]{0,128,0} Green}" },
      { name: "{\\color[RGB]{100,149,237} Corn}", code: "{\\color[RGB]{100,149,237} Corn}" },
      { name: "{\\color[RGB]{75,0,130} Indigo}", code: "{\\color[RGB]{75,0,130} Indigo}" },
      { name: "{\\color[RGB]{216,191,216} Thistle}", code: "{\\color[RGB]{216,191,216} Thistle}" },
      { name: "{\\color[RGB]{160,82,45} Sienna}", code: "{\\color[RGB]{160,82,45} Sienna}" },
      { name: "{\\color[RGB]{210,105,30} Chocolate}", code: "{\\color[RGB]{210,105,30} Chocolate}" },
      { name: "{\\color[RGB]{210,180,140} Tan}", code: "{\\color[RGB]{210,180,140} Tan}" },
      { name: "{\\color[RGB]{112,128,144} Slate Gray}", code: "{\\color[RGB]{112,128,144} Slate Gray}" },
      { name: "{\\color[RGB]{105,105,105} Dim Gray}", code: "{\\color[RGB]{105,105,105} Dim Gray}" },
      { name: "{\\color[RGB]{199,21,133} Violet}", code: "{\\color[RGB]{199,21,133} Violet}" },
      { name: "{\\color[RGB]{30,144,255} Dodg Blue}", code: "{\\color[RGB]{30,144,255} Dodg Blue}" },
      { name: "{\\color[RGB]{46,139,87} Sea Green}", code: "{\\color[RGB]{46,139,87} Sea Green}" },
      { name: "{\\color[RGB]{184,134,11} Dark Gold}", code: "{\\color[RGB]{184,134,11} Dark Gold}" },
      { name: "{\\color[RGB]{165,42,42} Brown}", code: "{\\color[RGB]{165,42,42} Brown}" },
    ],
  },
];

export default data;
