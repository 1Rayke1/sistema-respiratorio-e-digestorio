/* ══════════════════════════════════════════════════════════════
   ANATOMIA HUMANA — DADOS
   Conteúdo baseado EXCLUSIVAMENTE nos PDFs:
   "SISTEMA RESPIRATÓRIO" e "SISTEMA DIGESTÓRIO"
   ══════════════════════════════════════════════════════════════ */

const VB = '0 0 400 320';

/* ---------- DIAGRAMAS SVG (esquemáticos) ---------- */
const DIAGRAMS = {

/* ── 1. NARIZ EXTERNO ── perfil ── */
narizExterno: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="ne-skin" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#f0bd9a"/><stop offset="1" stop-color="#d99a72"/></linearGradient></defs>
<path d="M250,8 C190,15 172,45 166,76 C164,84 160,92 154,104 C147,117 138,132 128,142 C120,148 114,151 115,155 C116,159 122,162 128,163 C127,168 129,173 136,175 C134,181 138,188 152,190 C147,196 151,204 164,206 C160,214 164,224 176,226 C186,246 200,262 224,272 C252,284 290,288 330,284 L340,8 Z"
 fill="url(#ne-skin)" stroke="#b97b52" stroke-width="2.5"/>
<path d="M128,146 C142,145 154,152 155,161 C155,168 148,171 141,169 C133,166 127,158 128,146 Z" fill="#e5a87f" stroke="#c1855c" stroke-width="1.8"/>
<ellipse cx="136" cy="166" rx="7" ry="4" fill="#7a4a35" transform="rotate(-14 136 166)"/>
<path d="M172,92 C180,86 194,86 202,92" fill="none" stroke="#8a5a3c" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="188" cy="101" rx="10" ry="4.5" fill="#3b2b26"/>
<path d="M150,192 C158,190 166,191 172,194" fill="none" stroke="#b06a52" stroke-width="3" stroke-linecap="round"/>
</svg>`,

/* ── 2. CAVIDADE NASAL ── corte sagital ── */
cavidadeNasal: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="cn-cav" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f8d3d9"/><stop offset="1" stop-color="#f2b7c0"/></linearGradient></defs>
<path d="M320,10 C220,15 175,45 160,70 C130,95 95,140 84,162 C78,172 82,180 92,182 L92,205 C92,214 100,220 112,220 L300,230 C330,240 350,270 355,300 L380,300 L380,10 Z"
 fill="#e8b08c" opacity="0.28" stroke="#c98d67" stroke-width="2"/>
<path d="M88,172 C95,140 130,95 168,72 C200,55 240,58 254,84 C268,110 280,150 288,186 L285,196 L100,200 C90,200 84,188 88,172 Z"
 fill="url(#cn-cav)" stroke="#d98a98" stroke-width="2.5"/>
<rect x="94" y="198" width="196" height="14" rx="7" fill="#e2a377" stroke="#bf7f55" stroke-width="1.5"/>
<path d="M176,80 L226,90" stroke="#f2c94c" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="196" cy="50" rx="20" ry="10" fill="#f6dd7a" stroke="#d9b53a" stroke-width="1.5"/>
<path d="M185,80 L183,58 M196,82 L195,58 M208,84 L206,59" stroke="#d9b53a" stroke-width="2.5" stroke-linecap="round"/>
<path d="M148,102 C158,124 166,158 170,192" fill="none" stroke="#63b7c9" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 9"/>
<ellipse cx="230" cy="120" rx="21" ry="8" fill="#e87f93" stroke="#c25a70" stroke-width="1.8" transform="rotate(-18 230 120)"/>
<ellipse cx="210" cy="150" rx="29" ry="10" fill="#e87f93" stroke="#c25a70" stroke-width="1.8" transform="rotate(-14 210 150)"/>
<ellipse cx="190" cy="182" rx="33" ry="11" fill="#e87f93" stroke="#c25a70" stroke-width="1.8" transform="rotate(-10 190 182)"/>
<path d="M86,152 C84,162 84,172 90,178" fill="none" stroke="#8f5f45" stroke-width="4" stroke-linecap="round"/>
<path d="M286,168 C290,178 290,188 286,194" fill="none" stroke="#8f5f45" stroke-width="4" stroke-linecap="round"/>
</svg>`,

/* ── 3. SEIOS PARANASAIS ── face anterior ── */
seiosParanasais: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="sp-skin" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f0bd9a"/><stop offset="1" stop-color="#dc9d76"/></linearGradient></defs>
<path d="M200,18 C265,18 300,68 300,140 C300,200 268,268 200,292 C132,268 100,200 100,140 C100,68 135,18 200,18 Z"
 fill="url(#sp-skin)" stroke="#b97b52" stroke-width="2.5"/>
<path d="M148,118 C158,112 174,112 182,118" fill="none" stroke="#8a5a3c" stroke-width="4" stroke-linecap="round"/>
<path d="M218,118 C226,112 242,112 252,118" fill="none" stroke="#8a5a3c" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="165" cy="132" rx="12" ry="6" fill="#3b2b26"/>
<ellipse cx="235" cy="132" rx="12" ry="6" fill="#3b2b26"/>
<path d="M193,150 L188,196 C192,202 208,202 212,196 L207,150" fill="#e5a87f" stroke="#c1855c" stroke-width="1.5"/>
<path d="M176,236 C190,242 210,242 224,236" fill="none" stroke="#b06a52" stroke-width="4" stroke-linecap="round"/>
<path d="M200,100 C192,78 176,70 166,78 C158,84 162,98 176,102 C184,104 194,104 200,100 Z" fill="#7fc9db" stroke="#4796ab" stroke-width="2" opacity="0.92"/>
<path d="M200,100 C208,78 224,70 234,78 C242,84 238,98 224,102 C216,104 206,104 200,100 Z" fill="#7fc9db" stroke="#4796ab" stroke-width="2" opacity="0.92"/>
<circle cx="192" cy="126" r="5.5" fill="#9fd7a8" stroke="#5da86a" stroke-width="1.5"/>
<circle cx="208" cy="126" r="5.5" fill="#9fd7a8" stroke="#5da86a" stroke-width="1.5"/>
<circle cx="195" cy="139" r="5" fill="#9fd7a8" stroke="#5da86a" stroke-width="1.5"/>
<circle cx="205" cy="139" r="5" fill="#9fd7a8" stroke="#5da86a" stroke-width="1.5"/>
<rect x="178" y="152" width="44" height="20" rx="9" fill="#b48fd9" stroke="#8a5fb5" stroke-width="2" stroke-dasharray="5 4" opacity="0.9"/>
<path d="M180,168 C160,168 148,182 152,196 C156,208 174,208 182,196 C186,188 184,176 180,168 Z" fill="#f2c94c" stroke="#c9a025" stroke-width="2" opacity="0.95"/>
<path d="M220,168 C240,168 252,182 248,196 C244,208 226,208 218,196 C214,188 216,176 220,168 Z" fill="#f2c94c" stroke="#c9a025" stroke-width="2" opacity="0.95"/>
</svg>`,

/* ── 4. FARINGE ── corte sagital ── */
faringe: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="fa-ph" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f2a9b5"/><stop offset="1" stop-color="#e07d8e"/></linearGradient></defs>
<path d="M310,8 C210,12 160,45 140,80 C118,110 96,140 92,152 C90,160 96,166 106,167 L104,186 C104,194 112,199 122,199 L150,258 C160,278 180,296 210,300 L330,302 L330,8 Z"
 fill="#e8b08c" opacity="0.25" stroke="#c98d67" stroke-width="2"/>
<path d="M108,150 C118,120 145,90 175,78 C200,68 225,72 232,92 C238,110 240,130 240,146 L112,152 Z" fill="#f6c6cd" stroke="#d98a98" stroke-width="2" opacity="0.9"/>
<ellipse cx="172" cy="122" rx="24" ry="8" fill="#e87f93" stroke="#c25a70" stroke-width="1.5" transform="rotate(-12 172 122)"/>
<path d="M235,68 C252,66 264,72 270,84 C278,100 282,150 282,180 C282,215 278,248 268,268 L244,268 C250,240 252,210 250,180 L228,160 C232,130 230,92 235,68 Z"
 fill="url(#fa-ph)" stroke="#c25a70" stroke-width="2.5"/>
<rect x="112" y="148" width="112" height="12" rx="6" fill="#e2a377" stroke="#bf7f55" stroke-width="1.5"/>
<path d="M222,152 C232,156 238,164 236,174 C235,180 230,183 227,180" fill="none" stroke="#d98a98" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="168" cy="200" rx="46" ry="26" fill="#e8798d" stroke="#c25a70" stroke-width="2"/>
<path d="M214,214 C226,208 234,214 234,226 C234,234 228,238 222,236" fill="#a8ded6" stroke="#5fa89e" stroke-width="2"/>
<path d="M258,80 C266,76 273,80 273,88 C273,95 266,98 260,95" fill="#d9647a" stroke="#a83e55" stroke-width="1.5"/>
<path d="M222,104 C214,108 212,118 218,124 C222,128 228,127 230,123" fill="none" stroke="#b5485e" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="224" cy="116" rx="4" ry="5" fill="#8f2f44"/>
<path d="M234,150 L280,148" stroke="#fff" stroke-width="2" stroke-dasharray="6 5" opacity="0.65"/>
<path d="M230,212 L276,212" stroke="#fff" stroke-width="2" stroke-dasharray="6 5" opacity="0.65"/>
<path d="M212,236 C210,260 212,280 218,298 L242,298 C238,280 238,262 240,244" fill="#f2b7c0" stroke="#d98a98" stroke-width="2" opacity="0.7"/>
</svg>`,

/* ── 5. LARINGE ── corte coronal ── */
laringe: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="la-w" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f2a9b5"/><stop offset="1" stop-color="#e07d8e"/></linearGradient></defs>
<path d="M138,70 C130,110 132,150 140,175 C148,200 148,235 142,285 L180,285 C184,240 182,205 174,182 C168,164 166,120 172,75 Z" fill="url(#la-w)" stroke="#c25a70" stroke-width="2.5"/>
<path d="M262,70 C270,110 268,150 260,175 C252,200 252,235 258,285 L220,285 C216,240 218,205 226,182 C232,164 234,120 228,75 Z" fill="url(#la-w)" stroke="#c25a70" stroke-width="2.5"/>
<path d="M196,26 C186,42 182,62 184,82 C186,96 194,102 200,102 C206,102 214,96 216,82 C218,62 214,42 204,26 C202,22 198,22 196,26 Z" fill="#a8ded6" stroke="#5fa89e" stroke-width="2.5"/>
<path d="M172,142 C186,146 194,154 194,162 C194,170 186,176 174,178" fill="#e8798d" stroke="#b5485e" stroke-width="2"/>
<path d="M228,142 C214,146 206,154 206,162 C206,170 214,176 226,178" fill="#e8798d" stroke="#b5485e" stroke-width="2"/>
<path d="M174,192 C190,194 198,199 198,206 C198,213 190,218 176,219" fill="#fdf3f4" stroke="#c98a95" stroke-width="2"/>
<path d="M226,192 C210,194 202,199 202,206 C202,213 210,218 224,219" fill="#fdf3f4" stroke="#c98a95" stroke-width="2"/>
<path d="M148,240 L176,240 M148,258 L178,258 M224,240 L252,240 M222,258 L252,258" stroke="#a8ded6" stroke-width="8" stroke-linecap="round"/>
</svg>`,

/* ── 6. CARTILAGENS DA LARINGE ── */
cartilagensLaringe: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="cl-c" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#bfe8e0"/><stop offset="1" stop-color="#8fccc2"/></linearGradient></defs>
<path d="M208,26 C196,44 190,66 192,90 C193,104 200,112 208,112 C216,112 223,104 224,90 C226,66 220,44 212,26 C211,22 209,22 208,26 Z"
 fill="url(#cl-c)" stroke="#4d9a8f" stroke-width="2.5"/>
<path d="M208,112 C204,120 200,126 196,130" fill="none" stroke="#4d9a8f" stroke-width="3" stroke-dasharray="4 4"/>
<path d="M130,128 C154,118 246,118 270,128 L262,178 C250,192 216,200 200,200 C184,200 150,192 138,178 Z"
 fill="url(#cl-c)" stroke="#4d9a8f" stroke-width="3"/>
<path d="M200,124 L200,158" stroke="#4d9a8f" stroke-width="3" stroke-linecap="round"/>
<path d="M196,120 C198,130 202,130 204,120" fill="none" stroke="#4d9a8f" stroke-width="2.5"/>
<path d="M148,212 C170,204 230,204 252,212 C258,222 258,236 252,246 C230,254 170,254 148,246 C142,236 142,222 148,212 Z"
 fill="url(#cl-c)" stroke="#4d9a8f" stroke-width="3"/>
<path d="M238,196 L252,170 L264,196 Z" fill="#7fbfb4" stroke="#3d8378" stroke-width="2.5"/>
<circle cx="252" cy="164" r="7" fill="#5fae74" stroke="#357a48" stroke-width="2"/>
<path d="M156,266 L244,266 M158,282 L242,282" stroke="#a8ded6" stroke-width="9" stroke-linecap="round" opacity="0.8"/>
</svg>`,

/* ── 7. TRAQUÉIA ── */
traqueia: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="tr-m" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#f0bcb2"/><stop offset="1" stop-color="#e09a90"/></linearGradient></defs>
<path d="M165,36 L235,36 L235,208 L262,246 C270,256 272,268 268,280 L236,280 C238,268 234,256 226,246 L200,216 L174,246 C166,256 162,268 164,280 L132,280 C128,268 130,256 138,246 L165,208 Z"
 fill="url(#tr-m)" stroke="#bf6c60" stroke-width="2.5"/>
<rect x="224" y="42" width="12" height="164" fill="#d9897e" stroke="#b5665b" stroke-width="1.5"/>
${[48,70,92,114,136,158,180].map(y=>`<rect x="161" y="${y}" width="64" height="14" rx="7" fill="#a8ded6" stroke="#5fa89e" stroke-width="2"/>`).join('')}
<path d="M200,216 L192,236 L208,236 Z" fill="#c25a50" stroke="#9c3f36" stroke-width="2"/>
<rect x="138" y="246" width="34" height="12" rx="6" fill="#a8ded6" stroke="#5fa89e" stroke-width="1.8" transform="rotate(-52 155 252)"/>
<rect x="228" y="246" width="34" height="12" rx="6" fill="#a8ded6" stroke="#5fa89e" stroke-width="1.8" transform="rotate(52 245 252)"/>
</svg>`,

/* ── 8. BRÔNQUIOS ── árvore ── */
bronquios: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<path d="M60,90 C46,150 46,220 78,262 C104,286 150,282 162,250 C170,220 168,150 152,96 C140,62 78,54 60,90 Z" fill="#f09aa8" opacity="0.28" stroke="#d97186" stroke-width="2"/>
<path d="M340,90 C354,150 354,220 322,262 C296,286 252,282 242,250 C234,220 236,150 250,96 C262,62 322,54 340,90 Z" fill="#f09aa8" opacity="0.28" stroke="#d97186" stroke-width="2"/>
<path d="M188,30 L212,30 L212,102 L188,102 Z" fill="#f0bcb2" stroke="#bf6c60" stroke-width="2.5"/>
${[38,54,70,86].map(y=>`<rect x="185" y="${y}" width="30" height="9" rx="4.5" fill="#a8ded6" stroke="#5fa89e" stroke-width="1.5"/>`).join('')}
<path d="M195,102 L142,138" stroke="#e0a096" stroke-width="16" stroke-linecap="round"/>
<path d="M205,102 L252,148" stroke="#e0a096" stroke-width="14" stroke-linecap="round"/>
<path d="M146,136 L112,104" stroke="#d98d82" stroke-width="10" stroke-linecap="round"/>
<path d="M142,150 L104,172" stroke="#d98d82" stroke-width="10" stroke-linecap="round"/>
<path d="M146,146 L134,212" stroke="#d98d82" stroke-width="10" stroke-linecap="round"/>
<path d="M252,146 L288,110" stroke="#d98d82" stroke-width="10" stroke-linecap="round"/>
<path d="M254,152 L276,212" stroke="#d98d82" stroke-width="10" stroke-linecap="round"/>
<path d="M112,104 L92,88 M112,104 L124,80 M104,172 L82,162 M104,172 L84,186 M134,212 L114,226 M134,212 L146,236 M288,110 L302,88 M288,110 L306,122 M276,212 L294,230 M276,212 L262,236" stroke="#cc7f74" stroke-width="6" stroke-linecap="round"/>
<path d="M92,88 L84,76 M92,88 L80,92 M84,186 L70,182 M84,186 L74,196 M114,226 L100,224 M114,226 L104,238 M146,236 L142,250 M146,236 L156,246 M302,88 L306,74 M302,88 L314,82 M306,122 L320,118 M306,122 L316,132 M294,230 L306,240 M294,230 L300,244 M262,236 L266,250 M262,236 L250,244" stroke="#c07268" stroke-width="3.5" stroke-linecap="round"/>
</svg>`,

/* ── 9. PULMÕES ── vista anterior ── */
pulmoes: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="pu-l" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f5aab7"/><stop offset="1" stop-color="#e58497"/></linearGradient></defs>
<rect x="190" y="24" width="20" height="60" rx="6" fill="#f0bcb2" stroke="#bf6c60" stroke-width="2"/>
<path d="M199,84 L160,120" stroke="#e0a096" stroke-width="10" stroke-linecap="round"/>
<path d="M201,84 L240,124" stroke="#e0a096" stroke-width="10" stroke-linecap="round"/>
<path d="M138,58 C100,72 76,120 74,180 C72,224 82,252 100,266 C130,278 164,272 174,252 C180,222 180,150 172,110 C168,84 156,62 138,58 Z"
 fill="url(#pu-l)" stroke="#c9556c" stroke-width="3"/>
<path d="M78,152 L172,162" stroke="#a83e55" stroke-width="3" fill="none"/>
<path d="M170,132 L96,244" stroke="#a83e55" stroke-width="3" fill="none"/>
<path d="M262,58 C300,72 324,120 326,180 C328,224 318,252 300,266 C272,278 244,274 236,254 C232,236 236,214 246,200 C238,178 232,140 236,108 C240,82 248,62 262,58 Z"
 fill="url(#pu-l)" stroke="#c9556c" stroke-width="3"/>
<path d="M302,138 L254,250" stroke="#a83e55" stroke-width="3" fill="none"/>
<path d="M238,142 C226,148 224,166 238,172 C230,166 230,150 238,142 Z" fill="#d97186" stroke="#a83e55" stroke-width="1.5"/>
<path d="M236,148 L214,144 M236,158 L212,156 M236,166 L216,168" stroke="#c25a70" stroke-width="5" stroke-linecap="round"/>
</svg>`,

/* ── 10. CAVIDADE BUCAL ── boca aberta ── */
cavidadeBucal: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="cb-lip" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e07a86"/><stop offset="1" stop-color="#c9525f"/></linearGradient></defs>
<ellipse cx="200" cy="165" rx="150" ry="128" fill="#e8b08c" opacity="0.35"/>
<path d="M62,165 C70,105 120,48 200,44 C280,48 330,105 338,165 C330,225 280,282 200,286 C120,282 70,225 62,165 Z"
 fill="url(#cb-lip)" stroke="#a63d4a" stroke-width="3"/>
<path d="M84,163 C94,116 136,76 200,72 C264,76 306,116 316,163 C306,212 264,254 200,258 C136,254 94,212 84,163 Z"
 fill="#5b2430" stroke="#7a3040" stroke-width="2"/>
<path d="M116,120 C140,96 168,86 200,85 C232,86 260,96 284,120 C262,138 232,146 200,146 C168,146 138,138 116,120 Z" fill="#f2c9ce"/>
${[[-72,108],[-52,98],[-30,91],[-8,88],[14,88],[36,91],[58,98],[78,108]].map(([dx,y])=>`<rect x="${196+dx}" y="${y}" width="17" height="24" rx="6" fill="#fdfbf5" stroke="#d9cfc0" stroke-width="1.2"/>`).join('')}
<path d="M148,132 C168,142 232,142 252,132 C244,150 228,158 200,158 C172,158 156,150 148,132 Z" fill="#e8919e" stroke="#c05e6e" stroke-width="1.5"/>
<path d="M160,140 C180,148 220,148 240,140" fill="none" stroke="#c05e6e" stroke-width="1.5"/>
<path d="M162,152 C180,162 220,162 238,152 C232,166 216,172 200,172 C184,172 168,166 162,152 Z" fill="#c95a6d" stroke="#a03a4d" stroke-width="1.5"/>
<path d="M193,168 C193,180 195,188 200,192 C205,188 207,180 207,168 Z" fill="#d9647a" stroke="#a03a4d" stroke-width="1.5"/>
<ellipse cx="200" cy="222" rx="92" ry="46" fill="#ec8296" stroke="#c05064" stroke-width="2.5"/>
<path d="M200,182 L200,252" stroke="#c05064" stroke-width="2" opacity="0.7"/>
<path d="M126,246 C142,258 168,264 200,264 C232,264 258,258 274,246" fill="none" stroke="#b5485e" stroke-width="3" opacity="0.7"/>
</svg>`,

/* ── 12. ESÔFAGO ── torso ── */
esofago: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<circle cx="200" cy="36" r="24" fill="#e8b08c" opacity="0.4" stroke="#c98d67" stroke-width="2"/>
<path d="M186,58 C150,64 118,80 106,104 C92,134 88,190 92,240 C96,280 120,300 200,302 C280,300 304,280 308,240 C312,190 308,134 294,104 C282,80 250,64 214,58 Z"
 fill="#e8b08c" opacity="0.28" stroke="#c98d67" stroke-width="2"/>
<path d="M108,208 C140,190 260,190 292,208" fill="none" stroke="#9a9fc9" stroke-width="3" stroke-dasharray="7 6"/>
<path d="M193,58 C191,100 191,160 193,205 C194,216 200,222 210,226" fill="none" stroke="#e2606f" stroke-width="16" stroke-linecap="round"/>
<path d="M193,58 C191,100 191,160 193,205 C194,216 200,222 210,226" fill="none" stroke="#f2a0ae" stroke-width="7" stroke-linecap="round"/>
<path d="M212,222 C240,222 252,240 246,256 C240,270 214,272 202,260" fill="#eb8f7a" opacity="0.65" stroke="#c9634e" stroke-width="2"/>
</svg>`,

/* ── 13. ESTÔMAGO ── */
estomago: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="es-b" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f2a48e"/><stop offset="1" stop-color="#e07a62"/></linearGradient></defs>
<path d="M162,26 L184,26 L184,92 L162,92 Z" fill="#f0bcb2" stroke="#bf6c60" stroke-width="2.5"/>
<path d="M162,92 C158,66 162,40 166,28 M180,28 L180,90" stroke="#d99a90" stroke-width="0" fill="none"/>
<path d="M172,92 C166,70 194,54 226,58 C278,64 300,98 296,136 C292,182 262,216 216,226 C178,234 138,224 116,210 C108,205 106,194 112,189 C126,178 148,184 164,172 C178,161 173,130 172,110 Z"
 fill="url(#es-b)" stroke="#b5533e" stroke-width="3"/>
<path d="M84,178 C102,174 116,178 122,188 C126,196 122,206 114,210 C100,216 86,212 78,202 C72,193 76,181 84,178 Z" fill="#e8a17b" stroke="#bf7c50" stroke-width="2.5"/>
<rect x="196" y="130" width="76" height="62" rx="12" fill="#c25040" stroke="#8f3428" stroke-width="2"/>
<path d="M204,142 C220,150 250,150 264,142 M204,158 C220,166 250,166 264,158 M204,174 C220,182 250,182 264,174" fill="none" stroke="#f2a48e" stroke-width="5" stroke-linecap="round"/>
</svg>`,

/* ── 14. INTESTINO DELGADO ── */
intestinoDelgado: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<path d="M178,38 C150,34 128,46 128,60 C128,70 140,76 152,72" fill="none" stroke="#eb8f7a" stroke-width="14" stroke-linecap="round" opacity="0.5"/>
<path d="M150,72 C124,84 108,106 106,130 C104,152 116,168 138,168 C170,168 196,156 214,140" fill="none" stroke="#e8a17b" stroke-width="22" stroke-linecap="round"/>
<ellipse cx="152" cy="76" rx="17" ry="13" fill="#efb28d" stroke="#bf7c50" stroke-width="2"/>
<rect x="96" y="100" width="42" height="52" rx="10" fill="#c9714a" stroke="#96502f" stroke-width="2"/>
<path d="M102,110 C114,116 126,116 132,110 M102,124 C114,130 126,130 132,124 M102,138 C114,144 126,144 132,138" fill="none" stroke="#f4c9a8" stroke-width="4" stroke-linecap="round"/>
<path d="M214,140 C232,128 240,120 240,110" fill="none" stroke="#e8a17b" stroke-width="18" stroke-linecap="round"/>
<path d="M240,112 C264,120 268,148 248,160 C224,174 196,168 178,184 C160,200 168,222 190,228 C214,234 240,224 252,208"
 fill="none" stroke="#eb9a6f" stroke-width="20" stroke-linecap="round"/>
<path d="M252,208 C266,224 262,246 242,254 C218,264 190,258 172,244 C158,232 152,214 158,200"
 fill="none" stroke="#e2855c" stroke-width="20" stroke-linecap="round"/>
<path d="M158,202 C144,214 142,234 154,248 C170,266 200,274 228,270 C252,266 268,252 270,236"
 fill="none" stroke="#d97a52" stroke-width="20" stroke-linecap="round"/>
</svg>`,

/* ── 15. INTESTINO GROSSO ── */
intestinoGrosso: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<path d="M190,150 C170,140 160,155 172,166 C184,176 202,172 210,160 C220,146 208,134 194,138" fill="none" stroke="#f0c9a8" stroke-width="14" stroke-linecap="round" opacity="0.55"/>
<path d="M118,238 C96,238 84,222 86,200 L90,110 C92,88 108,74 130,74 L268,72 C292,72 308,88 308,108 L310,196"
 fill="none" stroke="#e8a17b" stroke-width="30" stroke-linecap="round"/>
${[[110,90],[148,74],[188,72],[228,72],[266,74]].map(([x,y])=>`<circle cx="${x}" cy="${y+14}" r="4" fill="none"/>`).join('')}
<path d="M104,180 L84,180 M106,142 L86,142 M112,106 L94,98 M140,88 L136,60 M180,86 L180,58 M220,86 L222,58 M258,88 L266,62 M296,120 L316,112 M298,158 L318,158" stroke="#c97e4f" stroke-width="5" stroke-linecap="round"/>
<path d="M128,60 L288,60" stroke="#c9714a" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
<ellipse cx="116" cy="240" rx="24" ry="26" fill="#efb28d" stroke="#bf7c50" stroke-width="2.5"/>
<path d="M122,262 C118,274 116,284 122,294 C126,300 132,298 133,292" fill="none" stroke="#d98d5f" stroke-width="7" stroke-linecap="round"/>
<path d="M158,226 C178,220 196,222 206,230" fill="none" stroke="#eb9a6f" stroke-width="14" stroke-linecap="round" opacity="0.75"/>
<circle cx="146" cy="230" r="10" fill="#d98d5f" stroke="#a3652f" stroke-width="2"/>
<path d="M310,196 C312,224 296,244 268,248 C246,252 230,246 224,234 C218,222 226,212 238,214" fill="none" stroke="#e2855c" stroke-width="24" stroke-linecap="round"/>
<path d="M238,214 C222,222 212,240 212,262" fill="none" stroke="#d97a52" stroke-width="22" stroke-linecap="round"/>
<path d="M212,262 L212,286" stroke="#c9634e" stroke-width="20" stroke-linecap="round"/>
<ellipse cx="212" cy="298" rx="13" ry="7" fill="#a34a3c" stroke="#7a3028" stroke-width="2"/>
</svg>`,

/* ── 16. FÍGADO ── */
figado: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="fi-l" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#c96a4e"/><stop offset="1" stop-color="#a34a34"/></linearGradient></defs>
<path d="M70,150 C74,108 118,80 180,78 C250,76 312,96 330,122 C338,134 336,146 324,152 L240,196 C200,214 130,216 96,204 C74,196 66,172 70,150 Z"
 fill="url(#fi-l)" stroke="#7a3221" stroke-width="3"/>
<path d="M244,84 C240,110 240,136 246,158" fill="none" stroke="#f2e9d8" stroke-width="9" stroke-linecap="round"/>
<path d="M222,150 C232,144 246,144 254,150 C258,158 254,168 244,170 C234,172 224,166 222,158 Z" fill="#8f3a26" stroke="#6b2418" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M188,172 C198,166 212,166 220,172 C224,180 220,190 210,192 C200,194 190,188 188,180 Z" fill="#8f3a26" stroke="#6b2418" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M164,196 C152,214 152,232 164,242 C176,250 190,244 194,230 C197,216 190,202 178,194 Z" fill="#9dc98a" stroke="#5f8f4a" stroke-width="2.5"/>
<path d="M226,196 C228,210 232,220 240,228" fill="none" stroke="#6a8fd9" stroke-width="10" stroke-linecap="round"/>
<path d="M210,200 C210,214 214,226 222,236" fill="none" stroke="#d95f5f" stroke-width="7" stroke-linecap="round"/>
</svg>`,

/* ── 17. DUCTOS BILIARES ── */
ductosBiliares: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<path d="M92,96 C96,66 130,46 180,44 C238,42 288,58 302,78 C310,88 306,98 296,104 L232,132 C198,146 140,148 112,138 C94,130 88,112 92,96 Z"
 fill="#c96a4e" opacity="0.35" stroke="#a34a34" stroke-width="2"/>
<path d="M236,132 L236,300 L272,300 L272,140" fill="#f0c9a8" opacity="0.5" stroke="#c99a6f" stroke-width="2"/>
<path d="M160,108 C172,120 186,128 198,132" fill="none" stroke="#7fbf6a" stroke-width="9" stroke-linecap="round"/>
<path d="M244,108 C232,120 218,128 206,132" fill="none" stroke="#7fbf6a" stroke-width="9" stroke-linecap="round"/>
<path d="M202,132 L204,178" fill="none" stroke="#6aa855" stroke-width="10" stroke-linecap="round"/>
<path d="M124,190 C110,206 112,228 128,238 C144,246 160,238 164,222 C168,206 158,192 144,186 Z" fill="#9dc98a" stroke="#5f8f4a" stroke-width="2.5"/>
<path d="M158,192 C174,186 192,182 204,180" fill="none" stroke="#8fc978" stroke-width="8" stroke-linecap="round"/>
<path d="M205,180 C210,206 212,228 214,248" fill="none" stroke="#559644" stroke-width="10" stroke-linecap="round"/>
<path d="M214,248 C216,258 222,264 232,266" fill="none" stroke="#47823a" stroke-width="9" stroke-linecap="round"/>
<path d="M292,258 C270,258 252,260 236,264" fill="none" stroke="#f2c94c" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
</svg>`,

/* ── 18. PÂNCREAS ── */
pancreas: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<path d="M96,128 C74,140 62,166 64,194 C66,224 88,246 116,246 C136,246 150,236 156,220" fill="none" stroke="#e8a17b" stroke-width="20" stroke-linecap="round" opacity="0.55"/>
<path d="M86,160 C74,192 88,222 118,228 C144,232 164,218 168,196 C172,172 190,160 220,150 C258,138 296,124 318,112 C330,105 328,90 314,92 C280,98 244,112 208,128 C176,142 150,138 128,142 C108,146 92,150 86,160 Z"
 fill="#f2cf8f" stroke="#c99b4a" stroke-width="3"/>
<path d="M310,104 C260,124 210,146 168,166 C148,176 136,192 132,210" fill="none" stroke="#a3742a" stroke-width="5" stroke-linecap="round"/>
<path d="M148,158 C132,162 116,168 104,176" fill="none" stroke="#b5852f" stroke-width="4" stroke-linecap="round"/>
<path d="M132,210 C130,220 124,226 114,228" fill="none" stroke="#96691f" stroke-width="5" stroke-linecap="round"/>
</svg>`,

/* ── 19. GLÂNDULAS SALIVARES ── perfil ── */
glandulasSalivares: `
<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
<path d="M330,20 C240,24 190,50 168,86 C148,112 118,148 112,162 C108,172 116,178 126,178 L124,196 C124,204 132,208 142,208 L138,224 C138,232 148,238 162,236 C170,258 190,276 220,282 C260,290 310,286 340,278 L344,20 Z"
 fill="#e8b08c" opacity="0.45" stroke="#c98d67" stroke-width="2.5"/>
<path d="M160,236 C186,252 226,258 262,252 C292,247 312,236 322,222" fill="none" stroke="#c98d67" stroke-width="2.5"/>
<path d="M296,108 C286,102 278,106 276,116 C274,128 280,140 290,144 C298,147 304,142 304,132 C304,122 302,112 296,108 Z" fill="#d9a577" stroke="#a87848" stroke-width="2"/>
<path d="M262,120 C242,118 230,130 230,148 C230,168 244,186 264,190 C282,193 294,182 294,164 C294,142 280,124 262,120 Z" fill="#f2b56f" stroke="#c9853a" stroke-width="2.5"/>
<path d="M234,150 C210,152 186,156 168,162" fill="none" stroke="#e09c4a" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="150" cy="196" rx="22" ry="12" fill="#f2b56f" stroke="#c9853a" stroke-width="2.5" stroke-dasharray="5 4" transform="rotate(-8 150 196)"/>
<ellipse cx="212" cy="228" rx="26" ry="16" fill="#f2b56f" stroke="#c9853a" stroke-width="2.5" transform="rotate(6 212 228)"/>
</svg>`,
};
DIAGRAMS.faringeDig = DIAGRAMS.faringe;

/* ══════════════════════════════════════════════════════════════
   ESTRUTURAS — nomenclatura EXATA dos PDFs
   ══════════════════════════════════════════════════════════════ */

const SYSTEMS = {
  resp: {
    name: 'SISTEMA RESPIRATÓRIO',
    icon: '🫁',
    regions: [
      { id:'nariz-externo', name:'NARIZ EXTERNO', icon:'👃', diagram:'narizExterno', structures:[
        { id:'r-raiz', name:'RAIZ', x:164, y:84, desc:'Parte superior do nariz externo, junto à fronte.' },
        { id:'r-dorso', name:'DORSO', x:146, y:115, desc:'Margem anterior do nariz externo, entre a raiz e o ápice.' },
        { id:'r-apice', name:'ÁPICE', x:118, y:150, desc:'Ponta do nariz externo.' },
        { id:'r-asas', name:'ASAS', x:150, y:158, desc:'Porções laterais arredondadas que delimitam as narinas.' },
        { id:'r-base', name:'BASE', x:135, y:175, desc:'Face inferior do nariz externo, onde se abrem as narinas.' },
        { id:'r-narina', name:'NARINA', x:136, y:166, desc:'Abertura anterior por onde o ar entra no nariz.' },
      ]},
      { id:'cavidade-nasal', name:'CAVIDADE NASAL', icon:'🌬️', diagram:'cavidadeNasal', structures:[
        { id:'r-abertura-piriforme', name:'ABERTURA PIRIFORME', x:90, y:166, desc:'Abertura anterior (óssea) da cavidade nasal.' },
        { id:'r-coanas', name:'COANAS', x:287, y:181, desc:'Aberturas posteriores da cavidade nasal, comunicam com a faringe.' },
        { id:'r-concha-sup', name:'CONCHA NASAL SUPERIOR', x:230, y:120, desc:'Projeção óssea mais alta da parede lateral da cavidade nasal.' },
        { id:'r-concha-med', name:'CONCHA NASAL MÉDIA', x:210, y:150, desc:'Projeção óssea intermediária da parede lateral da cavidade nasal.' },
        { id:'r-concha-inf', name:'CONCHA NASAL INFERIOR', x:190, y:182, desc:'Projeção óssea mais baixa e maior da parede lateral.' },
        { id:'r-meato-sup', name:'MEATO NASAL SUPERIOR', x:239, y:132, desc:'Passagem de ar situada abaixo da concha nasal superior.' },
        { id:'r-meato-med', name:'MEATO NASAL MÉDIO', x:221, y:164, desc:'Passagem de ar situada abaixo da concha nasal média.' },
        { id:'r-meato-inf', name:'MEATO NASAL INFERIOR', x:200, y:195, desc:'Passagem de ar situada abaixo da concha nasal inferior.' },
        { id:'r-epitelio-olf', name:'EPITÉLIO OLFATÓRIO', x:200, y:84, desc:'Revestimento do teto da cavidade nasal, responsável pelo olfato.' },
        { id:'r-nervo-olf', name:'NERVO OLFATÓRIO', x:195, y:56, desc:'Filamentos nervosos que atravessam o teto da cavidade nasal.' },
        { id:'r-ducto-nasolacrimal', name:'DUCTO NASOLACRIMAL', x:158, y:145, desc:'Conduz a lágrima do olho para a cavidade nasal.' },
      ]},
      { id:'seios-paranasais', name:'SEIOS PARANASAIS', icon:'💀', diagram:'seiosParanasais', structures:[
        { id:'r-seio-frontal', name:'SEIO FRONTAL', x:178, y:88, desc:'Cavidade situada no osso frontal, acima das órbitas.' },
        { id:'r-seio-esfenoidal', name:'SEIO ESFENOIDAL', x:200, y:162, desc:'Cavidade profunda, situada no osso esfenoide.' },
        { id:'r-seios-etmoidais', name:'SEIOS ETMOIDAIS', x:200, y:132, desc:'Pequenas células situadas entre as órbitas.' },
        { id:'r-seios-maxilares', name:'SEIOS MAXILARES', x:163, y:185, desc:'Cavidades situadas nas maxilas, ao lado do nariz.' },
      ]},
      { id:'faringe-resp', name:'FARINGE', icon:'🗣️', diagram:'faringe', structures:[
        { id:'r-torus-tubal', name:'TÓRUS TUBAL', x:222, y:110, desc:'Elevação em torno do óstio da tuba auditiva, na nasofaringe.' },
        { id:'r-ostio-tuba', name:'ÓSTIO FARÍNGEO DA TUBA AUDITIVA', x:224, y:118, desc:'Abertura da tuba auditiva na parede da nasofaringe.' },
        { id:'r-faringe', name:'FARINGE', x:272, y:168, desc:'Tubo muscular comum aos sistemas respiratório e digestório.' },
        { id:'r-nasofaringe', name:'NASOFARINGE', x:255, y:115, desc:'Porção superior da faringe, posterior à cavidade nasal.' },
        { id:'r-orofaringe', name:'OROFARINGE', x:255, y:182, desc:'Porção média da faringe, posterior à cavidade bucal.' },
        { id:'r-laringofaringe', name:'LARINGOFARINGE', x:255, y:240, desc:'Porção inferior da faringe, posterior à laringe.' },
        { id:'r-tonsilas-faringeas', name:'TONSILAS FARÍNGEAS', x:264, y:87, desc:'Tecido linfoide no teto/parede posterior da nasofaringe.' },
      ]},
      { id:'laringe', name:'LARINGE', icon:'🎙️', diagram:'laringe', structures:[
        { id:'r-epiglote', name:'EPIGLOTE', x:200, y:52, desc:'Fecha a entrada da laringe durante a deglutição.' },
        { id:'r-prega-vestibular', name:'PREGA VESTIBULAR', x:182, y:158, desc:'Prega superior da laringe (acima da prega vocal).' },
        { id:'r-prega-vocal', name:'PREGA VOCAL', x:184, y:206, desc:'Prega inferior da laringe, responsável pela produção da voz.' },
        { id:'r-laringe', name:'LARINGE', x:250, y:120, desc:'Órgão da fonação, entre a faringe e a traquéia.' },
      ]},
      { id:'cartilagens-laringe', name:'CARTILAGENS DA LARINGE', icon:'🔷', diagram:'cartilagensLaringe', structures:[
        { id:'r-cart-epiglotica', name:'CARTILAGEM EPIGLÓTICA', x:208, y:60, desc:'Cartilagem em forma de folha que sustenta a epiglote.' },
        { id:'r-cart-tireoide', name:'CARTILAGEM DA TIREÓIDE', x:186, y:155, desc:'Maior cartilagem da laringe, forma a proeminência laríngea.' },
        { id:'r-cart-cricoide', name:'CARTILAGEM CRICÓIDE', x:198, y:228, desc:'Cartilagem em forma de anel, abaixo da cartilagem da tireóide.' },
        { id:'r-cart-corniculada', name:'CARTILAGEM CORNICULADA', x:252, y:164, desc:'Pequena cartilagem apoiada sobre a cartilagem aritenóide.' },
        { id:'r-cart-aritenoide', name:'CARTILAGEM ARITENÓIDE', x:251, y:188, desc:'Cartilagem em pirâmide, posterior, sobre a cricóide.' },
      ]},
      { id:'traqueia', name:'TRAQUÉIA', icon:'🪈', diagram:'traqueia', structures:[
        { id:'r-aneis-cart', name:'ANÉIS CARTILAGINOSOS', x:193, y:99, desc:'Anéis em "C" que mantêm a traquéia aberta.' },
        { id:'r-lig-anulares', name:'LIGAMENTOS ANULARES', x:193, y:130, desc:'Faixas que unem os anéis cartilaginosos entre si.' },
        { id:'r-parede-post-traqueia', name:'PAREDE POSTERIOR DA TRAQUÉIA', x:230, y:120, desc:'Parede membranácea, sem cartilagem, voltada para o esôfago.' },
        { id:'r-carina', name:'CARINA', x:200, y:228, desc:'Crista interna na bifurcação da traquéia.' },
        { id:'r-traqueia', name:'TRAQUÉIA', x:170, y:170, desc:'Tubo que conduz o ar da laringe aos brônquios.' },
      ]},
      { id:'bronquios', name:'BRÔNQUIOS', icon:'🌳', diagram:'bronquios', structures:[
        { id:'r-bronquio-principal-esq', name:'PRINCIPAL ESQUERDO', x:230, y:128, desc:'Brônquio que entra no pulmão esquerdo; mais horizontal.' },
        { id:'r-bronquio-principal-dir', name:'PRINCIPAL DIREITO', x:168, y:122, desc:'Brônquio que entra no pulmão direito; mais vertical e calibroso.' },
        { id:'r-blsd', name:'BRONQUIO LOBAR SUPERIOR DIREITO', x:128, y:118, desc:'Ventila o lobo superior do pulmão direito.' },
        { id:'r-blmd', name:'BRONQUIO LOBAR MÉDIO DIREITO', x:122, y:162, desc:'Ventila o lobo médio do pulmão direito.' },
        { id:'r-blid', name:'BRONQUIO LOBAR INFERIOR DIREITO', x:140, y:184, desc:'Ventila o lobo inferior do pulmão direito.' },
        { id:'r-blse', name:'BRONQUIO LOBAR SUPERIOR ESQUERDO', x:272, y:126, desc:'Ventila o lobo superior do pulmão esquerdo.' },
        { id:'r-blie', name:'BRONQUIO LOBAR INFERIOR ESQUERDO', x:266, y:184, desc:'Ventila o lobo inferior do pulmão esquerdo.' },
        { id:'r-bronquios-segmentares', name:'BRONQUIOS SEGMENTARES', x:99, y:93, desc:'Ramos dos brônquios lobares; ventilam os segmentos pulmonares.' },
        { id:'r-bronquiolos', name:'BRÔNQUIOLOS', x:88, y:230, desc:'Ramificações mais finas da árvore bronquial.' },
      ]},
      { id:'pulmoes', name:'PULMÕES', icon:'🫁', diagram:'pulmoes', structures:[
        { id:'r-lobo-sup-esq', name:'LOBO SUPERIOR ESQ.', x:272, y:100, desc:'Lobo superior do pulmão esquerdo, acima da fissura oblíqua.' },
        { id:'r-lobo-inf-esq', name:'LOBO INFERIOR ESQ.', x:298, y:225, desc:'Lobo inferior do pulmão esquerdo, abaixo da fissura oblíqua.' },
        { id:'r-fissura-obliqua', name:'FISSURA OBLÍQUA', x:280, y:192, desc:'Fissura que separa o lobo inferior nos dois pulmões.' },
        { id:'r-lobo-sup-dir', name:'LOBO SUPERIOR DIR.', x:120, y:105, desc:'Lobo superior do pulmão direito, acima da fissura horizontal.' },
        { id:'r-fissura-horizontal', name:'FISSURA HORIZONTAL', x:120, y:156, desc:'Exclusiva do pulmão direito; separa lobo superior e médio.' },
        { id:'r-lobo-medio', name:'LOBO MÉDIO', x:110, y:190, desc:'Lobo exclusivo do pulmão direito, entre as duas fissuras.' },
        { id:'r-lobo-inf-dir', name:'LOBO INFERIOR DIR.', x:150, y:230, desc:'Lobo inferior do pulmão direito, abaixo da fissura oblíqua.' },
        { id:'r-pulmao-base', name:'BASE', x:120, y:264, desc:'Face inferior do pulmão, apoiada sobre o diafragma.' },
        { id:'r-pulmao-apice', name:'ÁPICE', x:268, y:62, desc:'Extremidade superior do pulmão.' },
        { id:'r-faces-costal', name:'FACES COSTAL', x:80, y:180, desc:'Face lateral do pulmão, em contato com as costelas.' },
        { id:'r-face-diafragmatica', name:'FACE DIAFRAGMÁTICA', x:288, y:266, desc:'Face inferior do pulmão, voltada para o diafragma.' },
        { id:'r-face-medial', name:'FACE MEDIAL', x:174, y:200, desc:'Face interna do pulmão, voltada para o mediastino.' },
        { id:'r-hilo-pulmonar', name:'HILO PULMONAR', x:232, y:156, desc:'Região da face medial por onde entram brônquios e vasos.' },
      ]},
    ]
  },

  dig: {
    name: 'SISTEMA DIGESTÓRIO',
    icon: '🍽️',
    regions: [
      { id:'cavidade-bucal', name:'CAVIDADE BUCAL', icon:'👄', diagram:'cavidadeBucal', structures:[
        { id:'d-labio-sup', name:'LÁBIO SUPERIOR', x:200, y:55, desc:'Limite superior da abertura da boca.' },
        { id:'d-labio-inf', name:'LÁBIO INFERIOR', x:200, y:274, desc:'Limite inferior da abertura da boca.' },
        { id:'d-vestibulo', name:'VESTÍBULO BUCAL', x:116, y:112, desc:'Espaço entre os lábios/bochechas e a arcada dentária.' },
        { id:'d-arcada', name:'ARCÁDA DENTÁRIA', x:200, y:98, desc:'Fileira de dentes implantados no arco ósseo.' },
        { id:'d-lingua-intr', name:'LÍNGUA (MUSCULATURA INTRÍNSECA)', x:200, y:214, desc:'Músculos próprios da língua; mudam a forma da língua.' },
        { id:'d-lingua-extr', name:'LÍNGUA (MUSCULATURA EXTRÍNSECA)', x:135, y:244, desc:'Músculos que fixam a língua e a movimentam como um todo.' },
        { id:'d-palato-duro', name:'PALATO DURO', x:200, y:140, desc:'Porção anterior e óssea do teto da boca.' },
        { id:'d-palato-mole', name:'PALATO MOLE', x:200, y:160, desc:'Porção posterior e muscular do teto da boca.' },
        { id:'d-uvula', name:'ÚVULA PALATINA', x:200, y:182, desc:'Projeção mediana pendente do palato mole.' },
        { id:'d-rima-labial', name:'RIMA LABIAL', x:70, y:165, desc:'Fenda/abertura entre os lábios superior e inferior.' },
      ]},
      { id:'faringe-dig', name:'FARINGE', icon:'🗣️', diagram:'faringe', structures:[
        { id:'d-faringe', name:'FARINGE', x:272, y:168, desc:'Tubo muscular que conduz o alimento da boca ao esôfago.' },
        { id:'d-nasofaringe', name:'NASOFARINGE', x:255, y:115, desc:'Porção superior da faringe, posterior à cavidade nasal.' },
        { id:'d-orofaringe', name:'OROFARINGE', x:255, y:182, desc:'Porção média da faringe, posterior à cavidade bucal.' },
        { id:'d-laringofaringe', name:'LARINGOFARINGE', x:255, y:240, desc:'Porção inferior da faringe, contínua com o esôfago.' },
      ]},
      { id:'esofago', name:'ESÔFAGO', icon:'📏', diagram:'esofago', structures:[
        { id:'d-esofago', name:'ESÔFAGO', x:193, y:150, desc:'Tubo muscular que liga a faringe ao estômago.' },
      ]},
      { id:'estomago', name:'ESTÔMAGO', icon:'🫃', diagram:'estomago', structures:[
        { id:'d-pregas-gastricas', name:'PREGAS GÁSTRICAS', x:234, y:161, desc:'Pregas da mucosa interna do estômago (vistas no corte).' },
        { id:'d-ostio-cardico', name:'ÓSTIO CÁRDICO', x:173, y:95, desc:'Abertura de entrada do estômago, junto ao esôfago.' },
        { id:'d-ostio-pilorico', name:'ÓSTIO PILÓRICO', x:110, y:196, desc:'Abertura de saída do estômago para o duodeno.' },
        { id:'d-regiao-cardia', name:'REGIÃO CARDIA', x:186, y:108, desc:'Região do estômago em torno da entrada do esôfago.' },
        { id:'d-regiao-pilorica', name:'REGIÃO PILÓRICA', x:140, y:202, desc:'Região final do estômago, antes do duodeno.' },
        { id:'d-fundo-estomago', name:'FUNDO DO ESTÔMAGO', x:248, y:74, desc:'Porção superior em cúpula, acima do nível do óstio cárdico.' },
        { id:'d-corpo-estomago', name:'CORPO DO ESTÔMAGO', x:196, y:158, desc:'Porção principal e central do estômago.' },
        { id:'d-curv-menor', name:'CURVATURA MENOR DO ESTÔMAGO', x:167, y:143, desc:'Margem côncava (medial) do estômago.' },
        { id:'d-curv-maior', name:'CURVATURA MAIOR DO ESTÔMAGO', x:293, y:152, desc:'Margem convexa (lateral) do estômago.' },
      ]},
      { id:'intestino-delgado', name:'INTESTINO DELGADO', icon:'🌀', diagram:'intestinoDelgado', structures:[
        { id:'d-duodeno', name:'DUODENO', x:110, y:150, desc:'Primeira porção do intestino delgado, em forma de "C".' },
        { id:'d-ampola-duodenal', name:'AMPOLA DUODENAL', x:152, y:76, desc:'Porção inicial dilatada do duodeno, após o piloro.' },
        { id:'d-pregas-circulares', name:'PREGAS CIRCULARES DO DUODENO', x:117, y:124, desc:'Pregas da mucosa interna do duodeno (vistas no corte).' },
        { id:'d-flexura-dj', name:'FLEXURA DUODENO JEJUNAL', x:238, y:112, desc:'Curva de transição entre o duodeno e o jejuno.' },
        { id:'d-jejuno', name:'JEJUNO', x:216, y:180, desc:'Porção média do intestino delgado.' },
        { id:'d-ileo', name:'ÍLEO', x:230, y:262, desc:'Porção final do intestino delgado; termina no intestino grosso.' },
      ]},
      { id:'intestino-grosso', name:'INTESTINO GROSSO', icon:'🔄', diagram:'intestinoGrosso', structures:[
        { id:'d-cecum', name:'CECUM', x:113, y:240, desc:'Porção inicial do intestino grosso, em fundo cego.' },
        { id:'d-juncao-icc', name:'JUNÇÃO ILEO-CECUM-CÓLICA', x:146, y:230, desc:'Ponto onde o íleo desemboca no intestino grosso.' },
        { id:'d-colo-sigmoide', name:'COLO SIGMÓIDE', x:240, y:230, desc:'Porção em "S" que antecede o reto.' },
        { id:'d-intestino-grosso', name:'INTESTINO GROSSO', x:186, y:60, desc:'Todo o segmento final do tubo digestório (o órgão como um todo).' },
        { id:'d-colo-ascendente', name:'COLO ASCENDENTE', x:100, y:160, desc:'Sobe pelo lado direito do abdome, do ceco à flexura.' },
        { id:'d-colo-transverso', name:'COLO TRANSVERSO', x:200, y:74, desc:'Cruza o abdome horizontalmente.' },
        { id:'d-colo-descendente', name:'COLO DESCENDENTE', x:300, y:162, desc:'Desce pelo lado esquerdo do abdome até o colo sigmóide.' },
        { id:'d-haustros', name:'HAUSTROS', x:148, y:86, desc:'Saculações (bolsas) da parede do intestino grosso.' },
        { id:'d-apendice', name:'APÊNDICE VERMIFORME', x:126, y:288, desc:'Projeção fina em forma de verme, ligada ao ceco.' },
        { id:'d-canal-retal', name:'CANAL RETAL', x:212, y:272, desc:'Porção final do tubo digestório, antes do ânus.' },
        { id:'d-anus', name:'ÂNUS', x:212, y:298, desc:'Abertura terminal do tubo digestório.' },
        { id:'d-tenia', name:'TÊNIA', x:250, y:60, desc:'Faixa longitudinal de musculatura na parede do colo.' },
      ]},
      { id:'figado', name:'FÍGADO', icon:'🟤', diagram:'figado', structures:[
        { id:'d-lobo-direito', name:'LOBO DIREITO', x:150, y:140, desc:'Maior lobo do fígado, à direita do ligamento falciforme.' },
        { id:'d-lobo-esquerdo', name:'LOBO ESQUERDO', x:288, y:122, desc:'Lobo menor, à esquerda do ligamento falciforme.' },
        { id:'d-lobo-caudado', name:'LOBO CAUDADO', x:238, y:157, desc:'Lobo da face visceral, posterior (indicado em tracejado).' },
        { id:'d-lobo-quadrado', name:'LOBO QUADRADO', x:204, y:180, desc:'Lobo da face visceral, entre a vesícula e o ligamento.' },
        { id:'d-veia-porta', name:'VEIA PORTA HEPÁTICA', x:233, y:212, desc:'Veia que leva sangue do tubo digestório ao fígado.' },
        { id:'d-lig-falciforme', name:'LIGAMENTO FALCIFORME', x:244, y:120, desc:'Prega que separa os lobos direito e esquerdo.' },
        { id:'d-arteria-hepatica', name:'ARTÉRIA HEPÁTICA PRÓPRIA', x:216, y:218, desc:'Artéria que leva sangue oxigenado ao fígado.' },
        { id:'d-vesicula-biliar', name:'VESÍCULA BILIAR', x:172, y:220, desc:'Órgão em pera que armazena a bile, sob o fígado.' },
      ]},
      { id:'ductos-biliares', name:'DUCTOS BILIARES', icon:'🟢', diagram:'ductosBiliares', structures:[
        { id:'d-ducto-cistico', name:'DUCTO CÍSTICO', x:176, y:188, desc:'Liga a vesícula biliar à via biliar principal.' },
        { id:'d-ducto-hep-dir', name:'DUCTO HEPÁTICO DIREITO', x:172, y:115, desc:'Drena a bile do lobo direito do fígado.' },
        { id:'d-ducto-hep-esq', name:'DUCTO HEPÁTICO ESQUERDO', x:232, y:115, desc:'Drena a bile do lobo esquerdo do fígado.' },
        { id:'d-ducto-hep-comum', name:'DUCTO HEPÁTICO COMUM', x:203, y:152, desc:'União dos ductos hepáticos direito e esquerdo.' },
        { id:'d-ducto-coledoco', name:'DUCTO COLÉDOCO', x:209, y:215, desc:'União do ducto hepático comum com o ducto cístico.' },
        { id:'d-ducto-hepatopancreatico', name:'DUCTO HEPATO PANCREÁTICO', x:225, y:262, desc:'Via final comum da bile e do suco pancreático, no duodeno.' },
      ]},
      { id:'pancreas-reg', name:'PÂNCREAS', icon:'🟡', diagram:'pancreas', structures:[
        { id:'d-pancreas-cabeca', name:'CABEÇA', x:120, y:196, desc:'Porção mais larga, abraçada pelo "C" do duodeno.' },
        { id:'d-pancreas-corpo', name:'CORPO', x:228, y:142, desc:'Porção média e alongada do pâncreas.' },
        { id:'d-pancreas-cauda', name:'CAUDA', x:310, y:102, desc:'Extremidade afilada do pâncreas.' },
        { id:'d-ducto-panc-principal', name:'DUCTO PANCREÁTICO PRINCIPAL', x:248, y:130, desc:'Percorre todo o pâncreas conduzindo o suco pancreático.' },
        { id:'d-ducto-panc-acessorio', name:'DUCTO PANCREÁTICO ACESSÓRIO', x:122, y:165, desc:'Via acessória de drenagem, na região da cabeça.' },
        { id:'d-ducto-pancreatico', name:'DUCTO PANCREÁTICO', x:130, y:216, desc:'Porção final do ducto, próxima à desembocadura no duodeno.' },
      ]},
      { id:'glandulas-salivares', name:'GLÂNDULAS SALIVARES', icon:'💧', diagram:'glandulasSalivares', structures:[
        { id:'d-parotida', name:'PARÓTIDA', x:262, y:155, desc:'Maior glândula salivar, anterior e inferior à orelha.' },
        { id:'d-ducto-parotida', name:'DUCTO DA PARÓTIDA', x:202, y:155, desc:'Conduz a saliva da parótida através da bochecha.' },
        { id:'d-sublingual', name:'SUBLINGUAL', x:150, y:196, desc:'Glândula salivar situada abaixo da língua.' },
        { id:'d-submandibular', name:'SUBMANDIBULAR', x:212, y:228, desc:'Glândula salivar situada abaixo da mandíbula.' },
      ]},
    ]
  }
};

/* Índices auxiliares */
const ALL_STRUCTURES = [];
(function(){
  for (const sysKey of ['resp','dig']) {
    SYSTEMS[sysKey].regions.forEach((reg, ri) => {
      reg.structures.forEach(st => {
        st.sys = sysKey;
        st.regionId = reg.id;
        st.regionName = reg.name;
        st.regionIdx = ri;
        st.diagram = reg.diagram;
        ALL_STRUCTURES.push(st);
      });
    });
  }
})();
const STRUCT_BY_ID = Object.fromEntries(ALL_STRUCTURES.map(s => [s.id, s]));
