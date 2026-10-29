function iniciarAcessibilidade() {
    const toggleBtn = document.getElementById(
        "accessibility-toggle-btn"
    );

    const closeBtn = document.getElementById(
        "btn-close-accessibility"
    );

    const menu = document.getElementById(
        "accessibility-menu"
    );

    const status = document.getElementById(
        "accessibility-status"
    );

    if (!toggleBtn || !menu) {
        return;
    }

    const increaseFontBtn = document.getElementById(
        "btn-increase-font"
    );

    const decreaseFontBtn = document.getElementById(
        "btn-decrease-font"
    );

    const contrastBtn = document.getElementById(
        "btn-high-contrast"
    );

    const highlightLinksBtn = document.getElementById(
        "btn-highlight-links"
    );

    const textSpacingBtn = document.getElementById(
        "btn-text-spacing"
    );

    const lineHeightBtn = document.getElementById(
        "btn-line-height"
    );

    const readableFontBtn = document.getElementById(
        "btn-readable-font"
    );

    const largeCursorBtn = document.getElementById(
        "btn-large-cursor"
    );

    const pauseAnimationsBtn = document.getElementById(
        "btn-pause-animations"
    );

    const hideImagesBtn = document.getElementById(
        "btn-hide-images"
    );

    const resetBtn = document.getElementById(
        "btn-reset-accessibility"
    );

    let currentZoom = 100;

    function informar(mensagem) {
        if (status) {
            status.textContent = mensagem;
        }
    }

    function fecharMenu() {
        menu.hidden = true;

        toggleBtn.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    function alternarClasse(
        classe,
        botao,
        mensagemAtivada,
        mensagemDesativada
    ) {
        const ativo = document.body.classList.toggle(
            classe
        );

        if (botao) {
            botao.setAttribute(
                "aria-pressed",
                String(ativo)
            );

            botao.classList.toggle(
                "active",
                ativo
            );
        }

        informar(
            ativo
                ? mensagemAtivada
                : mensagemDesativada
        );
    }

    toggleBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        const menuAberto = !menu.hidden;

        menu.hidden = menuAberto;

        toggleBtn.setAttribute(
            "aria-expanded",
            String(!menuAberto)
        );
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            fecharMenu();
            toggleBtn.focus();
        });
    }

    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (
            !menu.contains(event.target) &&
            !toggleBtn.contains(event.target)
        ) {
            fecharMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            fecharMenu();
            toggleBtn.focus();
        }
    });

    if (increaseFontBtn) {
        increaseFontBtn.addEventListener(
            "click",
            function () {
                currentZoom = Math.min(
                    currentZoom + 10,
                    140
                );

                document.body.style.zoom =
                    currentZoom + "%";

                informar(
                    "Ampliação da página: " +
                    currentZoom +
                    "%"
                );
            }
        );
    }

    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener(
            "click",
            function () {
                currentZoom = Math.max(
                    currentZoom - 10,
                    80
                );

                document.body.style.zoom =
                    currentZoom + "%";

                informar(
                    "Ampliação da página: " +
                    currentZoom +
                    "%"
                );
            }
        );
    }

    if (contrastBtn) {
        contrastBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "high-contrast",
                    contrastBtn,
                    "Alto contraste ativado",
                    "Alto contraste desativado"
                );
            }
        );
    }

    if (highlightLinksBtn) {
        highlightLinksBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "highlight-links",
                    highlightLinksBtn,
                    "Destaque de links ativado",
                    "Destaque de links desativado"
                );
            }
        );
    }

    if (textSpacingBtn) {
        textSpacingBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "increased-text-spacing",
                    textSpacingBtn,
                    "Espaçamento do texto aumentado",
                    "Espaçamento do texto restaurado"
                );
            }
        );
    }

    if (lineHeightBtn) {
        lineHeightBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "increased-line-height",
                    lineHeightBtn,
                    "Altura das linhas aumentada",
                    "Altura das linhas restaurada"
                );
            }
        );
    }

    if (readableFontBtn) {
        readableFontBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "readable-font",
                    readableFontBtn,
                    "Fonte legível ativada",
                    "Fonte original restaurada"
                );
            }
        );
    }

    if (largeCursorBtn) {
        largeCursorBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "large-cursor",
                    largeCursorBtn,
                    "Cursor maior ativado",
                    "Cursor original restaurado"
                );
            }
        );
    }

    if (pauseAnimationsBtn) {
        pauseAnimationsBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "pause-animations",
                    pauseAnimationsBtn,
                    "Animações pausadas",
                    "Animações restauradas"
                );
            }
        );
    }

    if (hideImagesBtn) {
        hideImagesBtn.addEventListener(
            "click",
            function () {
                alternarClasse(
                    "hide-images",
                    hideImagesBtn,
                    "Imagens ocultadas",
                    "Imagens restauradas"
                );
            }
        );
    }

    if (resetBtn) {
        resetBtn.addEventListener(
            "click",
            function () {
                currentZoom = 100;

                document.body.style.zoom = "100%";

                const classes = [
                    "high-contrast",
                    "highlight-links",
                    "increased-text-spacing",
                    "increased-line-height",
                    "readable-font",
                    "large-cursor",
                    "pause-animations",
                    "hide-images"
                ];

                classes.forEach(function (classe) {
                    document.body.classList.remove(
                        classe
                    );
                });

                const botoes = [
                    contrastBtn,
                    highlightLinksBtn,
                    textSpacingBtn,
                    lineHeightBtn,
                    readableFontBtn,
                    largeCursorBtn,
                    pauseAnimationsBtn,
                    hideImagesBtn
                ];

                botoes.forEach(function (botao) {
                    if (botao) {
                        botao.setAttribute(
                            "aria-pressed",
                            "false"
                        );

                        botao.classList.remove(
                            "active"
                        );
                    }
                });

                informar(
                    "Configurações de acessibilidade restauradas"
                );
            }
        );
    }
}