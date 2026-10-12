/* MECÁNICA DE FLUIDOS
   Calculadora y simulaciones interactivas.
   Este archivo contiene todo el JavaScript del proyecto. */

const formulaData = {
            1: {
                title: "1. Presión Hidrostática",
                badge: "P = ρ · g · h",
                theory: `
                    <p>La <strong>Presión Hidrostática</strong> es la presión ejercida por un fluido en reposo debido a la atracción gravitacional sobre la masa del líquido.</p>
                    <p class="bg-slate-100 p-3 rounded-lg border-l-4 border-fluid-500 font-mono text-center text-slate-800">
                        $$P = \\rho \\cdot g \\cdot h$$
                        $$P_{absoluta} = P_0 + \\rho \\cdot g \\cdot h$$
                    </p>
                    <p>Donde <strong>P</strong> es la presión hidrostática, <strong>ρ</strong> es la densidad del fluido, <strong>g</strong> es la aceleración de la gravedad (9.81 m/s²), y <strong>h</strong> es la profundidad del punto evaluado.</p>
                `,
                targets: [
                    { id: 'P', name: 'Presión Hidrostática (P)' },
                    { id: 'rho', name: 'Densidad del Fluido (ρ)' },
                    { id: 'h', name: 'Profundidad (h)' },
                    { id: 'P_abs', name: 'Presión Absoluta (P_abs)' }
                ],
                fields: {
                    rho: { label: 'Densidad (ρ)', default: 1000, unit: 'kg/m³' },
                    g: { label: 'Gravedad (g)', default: 9.81, unit: 'm/s²' },
                    h: { label: 'Profundidad (h)', default: 1.3, unit: 'm' },
                    P0: { label: 'Presión Atmosférica (P₀)', default: 101325, unit: 'Pa' },
                    P: { label: 'Presión Hidrostática (P)', default: 12753, unit: 'Pa' }
                }
            },
            2: {
                title: "2. Fuerza de Empuje (Arquímedes)",
                badge: "F_B = ρ · g · V",
                theory: `
                    <p>El <strong>Principio de Arquímedes</strong> establece que todo cuerpo sumergido total o parcialmente en un fluido experimenta una fuerza de empuje vertical hacia arriba igual al peso del fluido desalojado.</p>
                    <p class="bg-slate-100 p-3 rounded-lg border-l-4 border-fluid-500 font-mono text-center text-slate-800">
                        $$F_B = \\rho \\cdot g \\cdot V$$
                    </p>
                    <p>Si el objeto flota en equilibrio: <strong>F_B = Peso del cuerpo</strong>. El porcentaje sumergido equivale a la razón entre la densidad del cuerpo y la del fluido.</p>
                `,
                targets: [
                    { id: 'FB', name: 'Fuerza de Empuje (F_B)' },
                    { id: 'rho', name: 'Densidad del Fluido (ρ)' },
                    { id: 'V', name: 'Volumen Sumergido (V)' }
                ],
                fields: {
                    rho: { label: 'Densidad Fluido (ρ)', default: 1000, unit: 'kg/m³' },
                    g: { label: 'Gravedad (g)', default: 9.81, unit: 'm/s²' },
                    V: { label: 'Volumen Sumergido (V)', default: 0.00116, unit: 'm³' },
                    FB: { label: 'Fuerza Empuje (F_B)', default: 11.38, unit: 'N' }
                }
            },
            3: {
                title: "3. Ley de Pascal (Prensa Hidráulica)",
                badge: "F₁ / A₁ = F₂ / A₂",
                theory: `
                    <p>La <strong>Ley de Pascal</strong> afirma que la presión ejercida sobre un fluido incompresible y en equilibrio dentro de un recipiente de paredes indeformables se transmite con igual intensidad en todas las direcciones.</p>
                    <p class="bg-slate-100 p-3 rounded-lg border-l-4 border-fluid-500 font-mono text-center text-slate-800">
                        $$\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\cdot \\left(\\frac{A_2}{A_1}\\right)$$
                    </p>
                    <p>Permite multiplicar la fuerza aplicada: una fuerza pequeña en un área pequeña crea una fuerza enorme en un área grande.</p>
                `,
                targets: [
                    { id: 'F2', name: 'Fuerza Salida (F₂)' },
                    { id: 'F1', name: 'Fuerza Entrada (F₁)' },
                    { id: 'A1', name: 'Área Pisto 1 (A₁)' },
                    { id: 'A2', name: 'Área Piston 2 (A₂)' }
                ],
                fields: {
                    F1: { label: 'Fuerza Entrada (F₁)', default: 100, unit: 'N' },
                    A1: { label: 'Área Ent. (A₁)', default: 0.01, unit: 'm²' },
                    A2: { label: 'Área Sal. (A₂)', default: 0.04, unit: 'm²' },
                    F2: { label: 'Fuerza Salida (F₂)', default: 400, unit: 'N' }
                }
            },
            4: {
                title: "4. Ecuación de Continuidad",
                badge: "A₁ · v₁ = A₂ · v₂",
                theory: `
                    <p>Representa la conservación de la masa para un fluido incompresible. El caudal (Q = A · v) se mantiene constante a lo largo de una tubería.</p>
                    <p class="bg-slate-100 p-3 rounded-lg border-l-4 border-fluid-500 font-mono text-center text-slate-800">
                        $$A_1 \\cdot v_1 = A_2 \\cdot v_2 = Q \\text{ (Caudal constante)}$$
                    </p>
                    <p>Al reducir la sección transversal (área), el fluido debe **aumentar su velocidad** proporcionalmente.</p>
                `,
                targets: [
                    { id: 'v2', name: 'Velocidad 2 (v₂)' },
                    { id: 'v1', name: 'Velocidad 1 (v₁)' },
                    { id: 'A1', name: 'Área Sección 1 (A₁)' },
                    { id: 'A2', name: 'Área Sección 2 (A₂)' }
                ],
                fields: {
                    A1: { label: 'Área 1 (A₁)', default: 0.05, unit: 'm²' },
                    v1: { label: 'Velocidad 1 (v₁)', default: 2.0, unit: 'm/s' },
                    A2: { label: 'Área 2 (A₂)', default: 0.0192, unit: 'm²' },
                    v2: { label: 'Velocidad 2 (v₂)', default: 5.2, unit: 'm/s' }
                }
            },
            5: {
                title: "5. Ecuación de Bernoulli",
                badge: "P + ½ρv² + ρgh = Cte",
                theory: `
                    <p>Expresa la conservación de la energía en un fluido ideal en régimen estacionario. Suma de presión estática, energía cinética y energía potencial.</p>
                    <p class="bg-slate-100 p-3 rounded-lg border-l-4 border-fluid-500 font-mono text-center text-slate-800">
                        $$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$
                    </p>
                    <p>Efecto Venturi: En zonas donde el fluido acelera (mayor v), **la presión disminuye (Low P)**.</p>
                `,
                targets: [
                    { id: 'P2', name: 'Presión 2 (P₂)' },
                    { id: 'P1', name: 'Presión 1 (P₁)' },
                    { id: 'v2', name: 'Velocidad 2 (v₂)' }
                ],
                fields: {
                    P1: { label: 'Presión 1 (P₁)', default: 150000, unit: 'Pa' },
                    v1: { label: 'Velocidad 1 (v₁)', default: 2.0, unit: 'm/s' },
                    h1: { label: 'Altura 1 (h₁)', default: 0, unit: 'm' },
                    v2: { label: 'Velocidad 2 (v₂)', default: 5.2, unit: 'm/s' },
                    h2: { label: 'Altura 2 (h₂)', default: 0, unit: 'm' },
                    rho: { label: 'Densidad (ρ)', default: 1000, unit: 'kg/m³' },
                    g: { label: 'Gravedad (g)', default: 9.81, unit: 'm/s²' },
                    P2: { label: 'Presión 2 (P₂)', default: 138480, unit: 'Pa' }
                }
            },
            6: {
                title: "6. Fuerza Viscosa (Ley de Stokes)",
                badge: "F = 6π · η · r · v",
                theory: `
                    <p>Describe la fuerza de fricción ejercida sobre objetos esféricos moviéndose a través de un fluido viscoso laminar con número de Reynolds bajo.</p>
                    <p class="bg-slate-100 p-3 rounded-lg border-l-4 border-fluid-500 font-mono text-center text-slate-800">
                        $$F = 6\\pi \\cdot \\eta \\cdot r \\cdot v$$
                        $$v_{terminal} = \\frac{2 r^2 g (\\rho_{esfera} - \\rho_{fluido})}{9 \\eta}$$
                    </p>
                    <p>En velocidad terminal, la aceleración es nula y la fuerza gravitatoria equilibra la suma del empuje y la fuerza de viscosidad.</p>
                `,
                targets: [
                    { id: 'F', name: 'Fuerza Viscosa (F)' },
                    { id: 'eta', name: 'Viscosidad (η)' },
                    { id: 'v', name: 'Velocidad (v)' },
                    { id: 'v_term', name: 'Velocidad Terminal (v_t)' }
                ],
                fields: {
                    eta: { label: 'Viscosidad (η)', default: 1.0, unit: 'Pa·s' },
                    r: { label: 'Radio esfera (r)', default: 0.05, unit: 'm' },
                    v: { label: 'Velocidad (v)', default: 0.85, unit: 'm/s' },
                    rho_s: { label: 'Densidad Esfera', default: 2500, unit: 'kg/m³' },
                    rho_f: { label: 'Densidad Fluido', default: 1000, unit: 'kg/m³' },
                    g: { label: 'Gravedad (g)', default: 9.81, unit: 'm/s²' },
                    F: { label: 'Fuerza Viscosa (F)', default: 0.80, unit: 'N' }
                }
            }
        };

        let currentTab = 1;
        let animationFrameId = null;

        function switchTab(tabIndex) {
            currentTab = tabIndex;
            
            // Update Tab UI
            document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
                if (idx + 1 === tabIndex) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Update Titles & Theory
            const info = formulaData[tabIndex];
            document.getElementById('sim-title').innerHTML = `<i class="fa-solid fa-flask text-fluid-600"></i> ${info.title}`;
            document.getElementById('sim-badge').innerText = info.badge;
            document.getElementById('theory-content').innerHTML = info.theory;

            // Re-render MathJax
            if (window.MathJax) {
                MathJax.typesetPromise();
            }

            // Populate Target Dropdown
            const targetSelect = document.getElementById('targetVar');
            targetSelect.innerHTML = '';
            info.targets.forEach(target => {
                const opt = document.createElement('option');
                opt.value = target.id;
                opt.innerText = target.name;
                targetSelect.appendChild(opt);
            });

            updateCalculatorInputs();
            initSimulationCanvas();
        }

        function updateCalculatorInputs() {
            const info = formulaData[currentTab];
            const targetVar = document.getElementById('targetVar').value;
            const container = document.getElementById('inputs-container');
            container.innerHTML = '';

            // Hide result box when switching targets
            document.getElementById('result-box').classList.add('hidden');

            for (const [key, field] of Object.entries(info.fields)) {
                // Skip rendering target input field
                if (key === targetVar) continue;

                const fieldWrapper = document.createElement('div');
                fieldWrapper.className = 'flex flex-col gap-1';
                fieldWrapper.innerHTML = `
                    <div class="flex justify-between items-center text-xs font-semibold text-slate-700">
                        <label for="input_${key}">${field.label}</label>
                        <span class="text-slate-400 font-mono">${field.unit}</span>
                    </div>
                    <input type="number" step="any" id="input_${key}" value="${field.default}" 
                        oninput="onInputChanged()"
                        class="w-full bg-white border border-slate-300 rounded-lg p-2 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-fluid-500 focus:outline-none shadow-sm">
                `;
                container.appendChild(fieldWrapper);
            }
        }

        function getInputValue(id, fallback) {
            const el = document.getElementById(`input_${id}`);
            if (!el) return fallback;
            const val = parseFloat(el.value);
            return isNaN(val) ? fallback : val;
        }

        function onInputChanged() {
            // Live update simulation params
            requestAnimationFrame(drawSimulation);
        }

        function calculateResult() {
            const target = document.getElementById('targetVar').value;
            let res = 0;
            let formulaStr = "";
            let unitStr = "";

            if (currentTab === 1) { // Hydrostatic
                const rho = getInputValue('rho', 1000);
                const g = getInputValue('g', 9.81);
                const h = getInputValue('h', 1.3);
                const P0 = getInputValue('P0', 101325);
                const P = getInputValue('P', 12753);

                if (target === 'P') {
                    res = rho * g * h;
                    formulaStr = `P = ${rho} × ${g} × ${h}`;
                    unitStr = "Pa";
                } else if (target === 'rho') {
                    res = P / (g * h);
                    formulaStr = `ρ = ${P} / (${g} × ${h})`;
                    unitStr = "kg/m³";
                } else if (target === 'h') {
                    res = P / (rho * g);
                    formulaStr = `h = ${P} / (${rho} × ${g})`;
                    unitStr = "m";
                } else if (target === 'P_abs') {
                    res = P0 + (rho * g * h);
                    formulaStr = `P_abs = ${P0} + (${rho} × ${g} × ${h})`;
                    unitStr = "Pa";
                }
            } 
            else if (currentTab === 2) { // Buoyancy
                const rho = getInputValue('rho', 1000);
                const g = getInputValue('g', 9.81);
                const V = getInputValue('V', 0.00116);
                const FB = getInputValue('FB', 11.38);

                if (target === 'FB') {
                    res = rho * g * V;
                    formulaStr = `F_B = ${rho} × ${g} × ${V}`;
                    unitStr = "N";
                } else if (target === 'rho') {
                    res = FB / (g * V);
                    formulaStr = `ρ = ${FB} / (${g} × ${V})`;
                    unitStr = "kg/m³";
                } else if (target === 'V') {
                    res = FB / (rho * g);
                    formulaStr = `V = ${FB} / (${rho} × ${g})`;
                    unitStr = "m³";
                }
            } 
            else if (currentTab === 3) { // Pascal
                const F1 = getInputValue('F1', 100);
                const A1 = getInputValue('A1', 0.01);
                const A2 = getInputValue('A2', 0.04);
                const F2 = getInputValue('F2', 400);

                if (target === 'F2') {
                    res = F1 * (A2 / A1);
                    formulaStr = `F₂ = ${F1} × (${A2} / ${A1})`;
                    unitStr = "N";
                } else if (target === 'F1') {
                    res = F2 * (A1 / A2);
                    formulaStr = `F₁ = ${F2} × (${A1} / ${A2})`;
                    unitStr = "N";
                } else if (target === 'A1') {
                    res = F1 * A2 / F2;
                    formulaStr = `A₁ = (${F1} × ${A2}) / ${F2}`;
                    unitStr = "m²";
                } else if (target === 'A2') {
                    res = F2 * A1 / F1;
                    formulaStr = `A₂ = (${F2} × ${A1}) / ${F1}`;
                    unitStr = "m²";
                }
            }
            else if (currentTab === 4) { // Continuity
                const A1 = getInputValue('A1', 0.05);
                const v1 = getInputValue('v1', 2.0);
                const A2 = getInputValue('A2', 0.0192);
                const v2 = getInputValue('v2', 5.2);

                if (target === 'v2') {
                    res = (A1 * v1) / A2;
                    formulaStr = `v₂ = (${A1} × ${v1}) / ${A2}`;
                    unitStr = "m/s";
                } else if (target === 'v1') {
                    res = (A2 * v2) / A1;
                    formulaStr = `v₁ = (${A2} × ${v2}) / ${A1}`;
                    unitStr = "m/s";
                } else if (target === 'A1') {
                    res = (A2 * v2) / v1;
                    formulaStr = `A₁ = (${A2} × ${v2}) / ${v1}`;
                    unitStr = "m²";
                } else if (target === 'A2') {
                    res = (A1 * v1) / v2;
                    formulaStr = `A₂ = (${A1} × ${v1}) / ${v2}`;
                    unitStr = "m²";
                }
            }
            else if (currentTab === 5) { // Bernoulli
                const P1 = getInputValue('P1', 150000);
                const v1 = getInputValue('v1', 2.0);
                const h1 = getInputValue('h1', 0);
                const v2 = getInputValue('v2', 5.2);
                const h2 = getInputValue('h2', 0);
                const rho = getInputValue('rho', 1000);
                const g = getInputValue('g', 9.81);
                const P2 = getInputValue('P2', 138480);

                if (target === 'P2') {
                    res = P1 + 0.5 * rho * (v1 * v1 - v2 * v2) + rho * g * (h1 - h2);
                    formulaStr = `P₂ = ${P1} + ½(${rho})(${v1}² - ${v2}²) + (${rho})(${g})(${h1} - ${h2})`;
                    unitStr = "Pa";
                } else if (target === 'P1') {
                    res = P2 + 0.5 * rho * (v2 * v2 - v1 * v1) + rho * g * (h2 - h1);
                    formulaStr = `P₁ = ${P2} + ½(${rho})(${v2}² - ${v1}²) + (${rho})(${g})(${h2} - ${h1})`;
                    unitStr = "Pa";
                } else if (target === 'v2') {
                    const term = (P1 - P2 + 0.5 * rho * v1 * v1 + rho * g * (h1 - h2)) / (0.5 * rho);
                    res = term > 0 ? Math.sqrt(term) : 0;
                    formulaStr = `v₂ = √[...]`;
                    unitStr = "m/s";
                }
            }
            else if (currentTab === 6) { // Stokes
                const eta = getInputValue('eta', 1.0);
                const r = getInputValue('r', 0.05);
                const v = getInputValue('v', 0.85);
                const rho_s = getInputValue('rho_s', 2500);
                const rho_f = getInputValue('rho_f', 1000);
                const g = getInputValue('g', 9.81);

                if (target === 'F') {
                    res = 6 * Math.PI * eta * r * v;
                    formulaStr = `F = 6 × π × ${eta} × ${r} × ${v}`;
                    unitStr = "N";
                } else if (target === 'eta') {
                    const F_val = getInputValue('F', 0.80);
                    res = F_val / (6 * Math.PI * r * v);
                    formulaStr = `η = ${F_val} / (6π × ${r} × ${v})`;
                    unitStr = "Pa·s";
                } else if (target === 'v') {
                    const F_val = getInputValue('F', 0.80);
                    res = F_val / (6 * Math.PI * eta * r);
                    formulaStr = `v = ${F_val} / (6π × ${eta} × ${r})`;
                    unitStr = "m/s";
                } else if (target === 'v_term') {
                    res = (2 * r * r * g * (rho_s - rho_f)) / (9 * eta);
                    formulaStr = `v_t = [2(${r}²)(${g})(${rho_s} - ${rho_f})] / [9(${eta})]`;
                    unitStr = "m/s";
                }
            }

            // Display Results
            const resBox = document.getElementById('result-box');
            resBox.classList.remove('hidden');
            document.getElementById('result-value').innerText = `${res.toLocaleString('es-ES', { maximumFractionDigits: 4 })} ${unitStr}`;
            document.getElementById('result-step').innerText = `Ecuación: ${formulaStr}`;

            // Trigger canvas animation update
            requestAnimationFrame(drawSimulation);
        }

        let canvas, ctx;
        let particles = [];

        function initSimulationCanvas() {
            canvas = document.getElementById('simCanvas');
            ctx = canvas.getContext('2d');
            
            // Adjust resolution
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

            // Generate particles for fluid motion
            particles = [];
            for(let i=0; i<60; i++) {
                particles.push({
                    x: Math.random() * rect.width,
                    y: Math.random() * rect.height,
                    r: Math.random() * 2.5 + 1,
                    speed: Math.random() * 1.5 + 0.5
                });
            }

            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animate();
        }

        function animate() {
            drawSimulation();
            animationFrameId = requestAnimationFrame(animate);
        }

        function drawSimulation() {
            if (!canvas || !ctx) return;
            const width = canvas.width / window.devicePixelRatio;
            const height = canvas.height / window.devicePixelRatio;

            ctx.clearRect(0, 0, width, height);

            // Background gradient
            const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
            bgGrad.addColorStop(0, '#0f172a');
            bgGrad.addColorStop(1, '#1e293b');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            // SIMULATION 1: HYDROSTATIC PRESSURE
            if (currentTab === 1) {
                const h = getInputValue('h', 1.3);
                const rho = getInputValue('rho', 1000);
                const g = getInputValue('g', 9.81);
                const P = rho * g * h;

                const tankTop = 50;
                const tankBottom = height - 40;
                const tankHeight = tankBottom - tankTop;
                const tankLeft = width / 2 - 100;
                const tankWidth = 200;

                // Tank Liquid
                const fluidGrad = ctx.createLinearGradient(0, tankTop, 0, tankBottom);
                fluidGrad.addColorStop(0, 'rgba(14, 165, 233, 0.4)');
                fluidGrad.addColorStop(1, 'rgba(3, 105, 161, 0.85)');
                ctx.fillStyle = fluidGrad;
                ctx.fillRect(tankLeft, tankTop, tankWidth, tankHeight);

                // Container Outline
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 3;
                ctx.strokeRect(tankLeft, tankTop, tankWidth, tankHeight);

                // Depth Point
                const pointY = Math.min(tankBottom - 5, tankTop + Math.min(1.0, h / 3.0) * tankHeight);
                
                // Pressure Arrows (equally in all directions)
                ctx.fillStyle = '#f59e0b';
                ctx.beginPath();
                ctx.arc(width/2, pointY, 8, 0, Math.PI * 2);
                ctx.fill();

                const arrowLen = Math.min(40, 10 + P / 1000);
                const angles = [0, Math.PI/2, Math.PI, 3*Math.PI/2, Math.PI/4, 3*Math.PI/4, 5*Math.PI/4, 7*Math.PI/4];
                ctx.strokeStyle = '#fbbf24';
                ctx.lineWidth = 2;
                angles.forEach(ang => {
                    ctx.beginPath();
                    ctx.moveTo(width/2, pointY);
                    ctx.lineTo(width/2 + Math.cos(ang) * arrowLen, pointY + Math.sin(ang) * arrowLen);
                    ctx.stroke();
                });

                // Measurement line
                ctx.strokeStyle = '#f43f5e';
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(tankLeft - 20, tankTop);
                ctx.lineTo(tankLeft - 20, pointY);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = '#f43f5e';
                ctx.font = '12px sans-serif';
                ctx.fillText(`h = ${h.toFixed(1)} m`, tankLeft - 65, (tankTop + pointY)/2);
                ctx.fillText(`P = ${(P/1000).toFixed(2)} kPa`, width/2 + arrowLen + 10, pointY + 4);
            }

            // SIMULATION 2: BUOYANCY (ARCHIMEDES)
            else if (currentTab === 2) {
                const rho = getInputValue('rho', 1000);
                const V = getInputValue('V', 0.00116);
                const g = getInputValue('g', 9.81);
                const FB = rho * g * V;

                const waterY = height / 2;
                
                // Water
                ctx.fillStyle = 'rgba(14, 165, 233, 0.5)';
                ctx.fillRect(40, waterY, width - 80, height - waterY - 30);
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 2;
                ctx.strokeRect(40, waterY, width - 80, height - waterY - 30);

                // Floating Block
                const blockW = 80;
                const blockH = 60;
                const blockX = width/2 - blockW/2;
                const blockY = waterY - blockH * 0.4; // Partly submerged

                ctx.fillStyle = '#d97706';
                ctx.fillRect(blockX, blockY, blockW, blockH);
                ctx.strokeStyle = '#f59e0b';
                ctx.strokeRect(blockX, blockY, blockW, blockH);

                // Force Vectors
                // FB (Upwards)
                drawArrow(ctx, width/2, blockY, width/2, blockY - 50, '#38bdf8', 3);
                ctx.fillStyle = '#38bdf8';
                ctx.font = 'bold 13px sans-serif';
                ctx.fillText(`F_B = ${FB.toFixed(2)} N`, width/2 + 10, blockY - 30);

                // Weight W (Downwards)
                drawArrow(ctx, width/2, blockY + blockH, width/2, blockY + blockH + 50, '#ef4444', 3);
                ctx.fillStyle = '#ef4444';
                ctx.fillText(`W = ${FB.toFixed(2)} N`, width/2 + 10, blockY + blockH + 35);
            }

            // SIMULATION 3: PASCAL'S LAW
            else if (currentTab === 3) {
                const F1 = getInputValue('F1', 100);
                const A1 = getInputValue('A1', 0.01);
                const A2 = getInputValue('A2', 0.04);
                const F2 = F1 * (A2 / A1);

                // Draw U-Tube Hydraulic Lift
                const p1W = 40;
                const p2W = Math.min(110, p1W * (A2 / A1));
                const bottomY = height - 50;
                const tubeY = 80;

                // Fluid path
                ctx.fillStyle = 'rgba(14, 165, 233, 0.6)';
                ctx.beginPath();
                ctx.rect(60, tubeY + 40, p1W, bottomY - tubeY - 40);
                ctx.rect(60, bottomY - 30, width - 120, 30);
                ctx.rect(width - 60 - p2W, tubeY + 20, p2W, bottomY - tubeY - 20);
                ctx.fill();

                // Pistons
                // Left Piston
                ctx.fillStyle = '#94a3b8';
                ctx.fillRect(60, tubeY + 40, p1W, 15);
                drawArrow(ctx, 60 + p1W/2, tubeY, 60 + p1W/2, tubeY + 38, '#ef4444', 3);
                ctx.fillStyle = '#ef4444';
                ctx.font = '12px sans-serif';
                ctx.fillText(`F₁=${F1}N`, 60, tubeY - 8);

                // Right Piston
                ctx.fillStyle = '#94a3b8';
                ctx.fillRect(width - 60 - p2W, tubeY + 20, p2W, 15);
                drawArrow(ctx, width - 60 - p2W/2, tubeY + 20, width - 60 - p2W/2, tubeY - 30, '#10b981', 4);
                ctx.fillStyle = '#10b981';
                ctx.font = 'bold 13px sans-serif';
                ctx.fillText(`F₂=${F2.toFixed(0)}N`, width - 60 - p2W, tubeY - 35);
            }

            // SIMULATION 4 & 5: CONTINUITY & BERNOULLI
            else if (currentTab === 4 || currentTab === 5) {
                const v1 = getInputValue('v1', 2.0);
                const v2 = getInputValue('v2', 5.2);

                // Pipe narrowing graphic
                ctx.fillStyle = 'rgba(14, 165, 233, 0.3)';
                ctx.beginPath();
                ctx.moveTo(30, 70);
                ctx.lineTo(width/2 - 40, 70);
                ctx.lineTo(width/2 + 40, 110);
                ctx.lineTo(width - 30, 110);
                ctx.lineTo(width - 30, height - 110);
                ctx.lineTo(width/2 + 40, height - 110);
                ctx.lineTo(width/2 - 40, height - 70);
                ctx.lineTo(30, height - 70);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 3;
                ctx.stroke();

                // Particle animation flowing
                particles.forEach(p => {
                    let speedFactor = (p.x > width/2) ? (v2 / v1) : 1.0;
                    p.x += p.speed * speedFactor * 1.5;
                    if (p.x > width - 30) p.x = 30;

                    ctx.fillStyle = '#e0f2fe';
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                });

                // Velocity labels
                ctx.fillStyle = '#38bdf8';
                ctx.font = '13px sans-serif';
                ctx.fillText(`v₁ = ${v1} m/s`, 50, 60);
                ctx.fillText(`v₂ = ${v2.toFixed(1)} m/s`, width - 120, 100);

                if (currentTab === 5) {
                    // Manometer tubes showing Bernoulli pressure drops
                    const P1 = getInputValue('P1', 150000);
                    const P2 = getInputValue('P2', 138480);
                    
                    const h1_bar = Math.min(50, P1 / 4000);
                    const h2_bar = Math.min(50, P2 / 4000);

                    // Vertical Columns
                    ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
                    ctx.fillRect(80, 70 - h1_bar, 16, h1_bar);
                    ctx.fillRect(width - 90, 110 - h2_bar, 16, h2_bar);

                    ctx.fillStyle = '#f59e0b';
                    ctx.fillText(`P₁ (Alta)`, 70, 50 - h1_bar);
                    ctx.fillText(`P₂ (Baja)`, width - 110, 90 - h2_bar);
                }
            }

            // SIMULATION 6: STOKES' LAW
            else if (currentTab === 6) {
                const eta = getInputValue('eta', 1.0);
                const r = getInputValue('r', 0.05);
                const v = getInputValue('v', 0.85);

                // Tube
                ctx.fillStyle = 'rgba(14, 165, 233, 0.3)';
                ctx.fillRect(width/2 - 50, 30, 100, height - 60);
                ctx.strokeStyle = '#38bdf8';
                ctx.strokeRect(width/2 - 50, 30, 100, height - 60);

                // Sphere Falling
                const sphereY = (Date.now() / 20 * (v * 0.8)) % (height - 120) + 50;
                const sphereR = Math.min(25, Math.max(10, r * 300));

                ctx.fillStyle = '#f97316';
                ctx.beginPath();
                ctx.arc(width/2, sphereY, sphereR, 0, Math.PI * 2);
                ctx.fill();

                // Vectors
                // Viscous Force F (Up)
                drawArrow(ctx, width/2, sphereY - sphereR, width/2, sphereY - sphereR - 35, '#38bdf8', 3);
                ctx.fillStyle = '#38bdf8';
                ctx.font = '12px sans-serif';
                ctx.fillText(`F_viscosa`, width/2 + 12, sphereY - sphereR - 20);

                // Gravity mg (Down)
                drawArrow(ctx, width/2, sphereY + sphereR, width/2, sphereY + sphereR + 35, '#ef4444', 3);
                ctx.fillStyle = '#ef4444';
                ctx.fillText(`m·g`, width/2 + 12, sphereY + sphereR + 25);
            }
        }

        // Helper Arrow Drawer
        function drawArrow(ctx, fromx, fromy, tox, toy, color, width) {
            const headlen = 8;
            const dx = tox - fromx;
            const dy = toy - fromy;
            const angle = Math.atan2(dy, dx);
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(fromx, fromy);
            ctx.lineTo(tox, toy);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(tox, toy);
            ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
            ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
            ctx.closePath();
            ctx.fill();
        }

        // Initialize on load
        window.onload = function() {
            switchTab(1);
            window.addEventListener('resize', initSimulationCanvas);
        }