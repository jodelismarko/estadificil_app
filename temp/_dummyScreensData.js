const _sitecoreResponse = [
    {
        "name": "Home",
        "screenType": "StaticScreen",
        "style": "startScreen",
        "components": [{
            "name": "Container",
            "contents": {
                "style": "horizontalCenteredContainer",
                "items": [{
                    "name": "Image",
                    "path": "/app-body/sxa-staticscreen/app-main/row-1-1",
                    "contents": {
                        "image": {
                            "fieldType": "image",
                            "link": "https://www.oney.pt/-/media/Project/Oney-Sites/Oney-Home/logo.png"
                        },
                        "style": "startScreenLogo"
                    }
                }]
            }
        }, {
            "name": "Container",
            "style": "centeredContainer",
            "path": "/app-body/sxa-staticscreen/app-main/row-2-1",
            "contents": {
                "items": [{
                    "name": "Container",
                    "style": "startScreenLinksContainerTop",
                    "contents": {
                        "items": [{
                            "Link": {
                                "value": {
                                    "href": "/Area-Cliente",
                                    "text": "Entrar na Área Cliente",
                                    "anchor": "",
                                    "linktype": "internal",
                                    "class": "",
                                    "title": "",
                                    "target": "",
                                    "querystring": "",
                                    "id": "{35E50AF2-64A6-4F52-A74A-030EB67CECAF}"
                                }
                            },
                            "Image": {
                                "value": {
                                    "src": "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    "alt": ""
                                }
                            },
                            "id": "ea85b87c-5939-4f35-b234-e619da3f2235",
                            "itemname": "Entrar na Area Cliente",
                            "name": "LinkButton",
                            "type": "Button",
                            "style": "default"
                        }, {
                            "Link": {
                                "value": {
                                    "href": "/Alterar-PIN-Cartao",
                                    "text": "Alterar PIN Cartão",
                                    "anchor": "",
                                    "linktype": "internal",
                                    "class": "",
                                    "title": "",
                                    "target": "",
                                    "querystring": "",
                                    "id": "{075A4FE9-DCDB-48F2-B8D8-448741151162}"
                                }
                            },
                            "Image": {
                                "value": {
                                    "src": "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    "alt": "Alterar código Oney Contacto"
                                }
                            },
                            "id": "546a776b-de54-43a8-bebb-d63c64905634",
                            "itemname": "Alterar Pin Cartao",
                            "name": "LinkButton",
                            "style": "default",
                            "type": "Button"
                        }]
                    }
                }, {
                    "name": "Container",
                    "style": "startScreenLinksContainerBottom",
                    "contents": {
                        "items": [{
                            "Link": {
                                "value": {
                                    "href": "/Adesao",
                                    "text": "Adesão Cartão Oney Auchan",
                                    "anchor": "",
                                    "linktype": "internal",
                                    "class": "",
                                    "title": "",
                                    "target": "",
                                    "querystring": "",
                                    "id": "{8C3938DB-1A9B-4B78-99E5-144230C019AF}"
                                }
                            },
                            "Image": {
                                "value": {
                                    "src": "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    "alt": ""
                                }
                            },
                            "id": "b1d0aca3-6405-4a33-a090-e803cb8a0179",
                            "itemname": "Adesao Cartao Oney Auchan",
                            "name": "LinkButton",
                            "type": "Button",
                            "style": "primary"
                        }, {
                            "Link": {
                                "value": {
                                    "href": "/Descarregar-a-App",
                                    "text": "Descarregar a App",
                                    "anchor": "",
                                    "linktype": "internal",
                                    "class": "",
                                    "title": "",
                                    "target": "",
                                    "querystring": "",
                                    "id": "{E2084134-0654-4016-AB05-6EADFE1A5012}"
                                }
                            },
                            "Image": {
                                "value": {
                                    "src": "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    "alt": ""
                                }
                            },
                            "id": "5bf7019a-e96c-435c-8f41-2a9d23a83018",
                            "itemname": "Descarregar a App",
                            "name": "LinkButton",
                            "type": "Button",
                            "style": "default"
                        }]
                    }
                }]
            }
        }]
    }, {
        "name": "Area-Cliente",
        "screenType": "ScrollScreen",
        "headerType": "Header",
        "footerType": "TestFooter",
        "components": []
    }, {
        "name": "Alterar-PIN-Cartao",
        "screenType": "ScrollScreen",
        "headerType": "Header",
        "footerType": "TestFooter",
        "components": []
    }, {
        "name": "Adesao",
        "screenType": "ScrollScreen",
        "headerType": "Header",
        "footerType": "TestFooter",
        "components": []
    }, {
        "name": "Descarregar-a-App",
        "screenType": "ScrollScreen",
        "headerType": "Header",
        "footerType": "TestFooter",
        "components": [{
            "name": "Container",
            "contents": {
                "style": "horizontalCenteredContainer",
                "items": [{
                    name: "HtmlView",
                    html: "<h1>Teste html</h1>"
                }]
            }
        }]
    }
];

const _sitecoreHeaders = [{
    name: "Header",
    type: "Container",
    style: "header",
    imageBackground: "https://preprodsite.oney.pt/-/media/Images/AreaCliente/BannerTopoAreaCliente/1560x300px_Topo-Area-Privada_v2.ashx",
    components: [{
        name: "Container",
        style: "flexRow",
        contents: {
            items: [
                {
                    name: "Image",
                    contents: {
                        image: {
                            fieldType: "image",
                            link: "https://www.oney.pt/-/media/Project/Oney-Sites/Oney-Home/logo.png"
                        },
                        style: "headerLogo"
                    }
                }, {
                    name: "NavigationBar",
                    style: "headerNavigationBar",
                    contents: {
                        items: [
                            {
                                Link: {
                                    value: {
                                        "href": "/Home",
                                        "text": "Home",
                                        "linktype": "internal"
                                    }
                                },
                                Image: {
                                    value: {
                                        src: "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    }
                                },
                                name: "LinkButton",
                                style: "navigationLink"
                            }, {
                                Link: {
                                    value: {
                                        "href": "/Adesao",
                                        "text": "Adesão Cartão Oney Auchan",
                                        "linktype": "internal"
                                    }
                                },
                                Image: {
                                    value: {
                                        src: "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    }
                                },
                                name: "LinkButton",
                                style: "navigationLink"
                            }, {
                                Link: {
                                    value: {
                                        "href": "/Descarregar-a-App",
                                        "text": "App",
                                        "linktype": "internal"
                                    }
                                },
                                Image: {
                                    value: {
                                        src: "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    }
                                },
                                name: "LinkButton",
                                style: "navigationLink"
                            }, {
                                Link: {
                                    value: {
                                        "href": "/Alterar-PIN-Cartao",
                                        "text": "Alterar PIN Cartão",
                                        "linktype": "internal"
                                    }
                                },
                                Image: {
                                    value: {
                                        src: "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                                    }
                                },
                                name: "LinkButton",
                                style: "navigationLink"
                            }
                        ]
                    }
                }, {
                    Link: {
                        value: {
                            href: "/Area-Cliente",
                            text: "Área Cliente",
                            linktype: "internal"
                        }
                    },
                    Image: {
                        value: {
                            src: "https://i1.wp.com/atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png?fit=280%2C279&ssl=1",
                        }
                    },
                    name: "LinkButton",
                    style: "navigationLink"
                }
            ]
        }
    }, {
        name: "Container",
        style: "flexRow",
        contents: {
            items: [{
                name: "Image",
                contents: {
                    image: {
                        fieldType: "image",
                        link: "https://www.oney.pt/-/media/Project/Oney-Sites/Oney-Home/logo.png_"
                    },
                    style: "headerBottomImage"
                }
            }]
        }
    }]
}];

export function _getDummyScreensData() {
    return {
        initialScreen: "/Home",
        screens: _sitecoreResponse.map(page => {
            return {
                name: "/" + page.name,
                type: page.screenType,
                header: page.headerType,
                footer: page.footerType,
                styleName: page.style,
                props: { components: page.components.map(c => parseComponentContents(c)) }
            }
        }),
        headers: _sitecoreHeaders.map(header => {
            return {
                name: header.name,
                type: header.type,
                styleName: header.style,
                props: {
                    components: header.components.map(c => parseComponentContents(c)),
                    bgImage: header.imageBackground
                }
            }
        })
    };
}

function parseComponentContents(component) {
    const result = {
        type: component.name,
        styleName: component.style
    };

    switch (component.name) {
        case "Image":
            result.styleName = component.contents.style;
            result.props = { url: component.contents.image.link };
            break;
        case "Container":
            result.props = {
                components: component.contents.items.map(c => parseComponentContents(c)),
                bgImage: component.imageBackground
            };
            break;
        case "LinkButton":
            const link = component.Link.value;
            const image = component.Image && component.Image.value && component.Image.value.src;
            result.props = { title: link.text, href: link.href, linkType: link.linktype, image };
            break;
        case "NavigationBar":
            result.props = { components: component.contents.items.map(c => parseComponentContents(c)) };
            break;
        case "LinkBox":
            const link2 = component.Link.value;
            const image2 = component.Image && component.Image.value && component.Image.value.src;
            result.props = { title: component.title, href: link2.href, linkType: link2.linktype, buttonText: link2.text, text: component.text, image: image2 };
            break;

        case "HtmlView":
            result.props = { htmlContent: component.html };
            break;
        default:

    }

    return result;
}

export const _standbyMedia = [
    {
        type: "image",
        url: "https://oney.pt/-/media/Images/MoratoriaPrivada/Herobanner---Homepage/HD-1560x720px.jpg",
        text: {
            value: `<h2>Moratória Privada</h2><div>Adie o pagamento do seu crédito&nbsp;<br>até 30 de setembro de 2020.`,
            style: {
                h2: {
                    marginTop: "10%",
                    marginLeft: "10%",
                    color: "white",
                },
                div: {
                    color: "white",
                    marginLeft: "10%",
                    fontSize: 20
                }
            }
        }
    },
    {
        type: "video",
        url: "https://oney.pt/-/media/Images/Home/Herobanner/Videos/ONEY_Herobanner_HD_MP4.mp4"
    }
];

/* Result example
{
    "initialScreen": "Home",
    "screens": [{
        "name": "Home",
        "type": "StaticScreen",
        "contents": [{
            "type": "Image",
            "props": { "url": "https://oney.pt/-/media/Project/Oney-Sites/Oney-Home/logo.png" }
        }, {
            "type": "Container",
            "props": {
                "items": [{
                    "type": "LinkButton",
                    "props": {
                        "title": "Entrar na Área Cliente",
                        "href": "/Area-Cliente",
                        "linkType": "internal",
                        "image": "http://auchan.local/-/media/Images/Icones/info.svg"
                    }
                }, {
                    "type": "LinkButton",
                    "props": {
                        "title": "Alterar PIN Cartão",
                        "href": "/Alterar-PIN-Cartao",
                        "linkType": "internal",
                        "image": "http://auchan.local/-/media/Images/Mensagens-Feedback/alterar_codigo_oney_contato.svg"
                    }
                }, {
                    "type": "LinkButton",
                    "props": {
                        "title": "Adesão Cartão Oney Auchan",
                        "href": "/Adesao",
                        "linkType": "internal",
                        "image": "http://auchan.local/-/media/Images/Mensagens-Feedback/confirmacao_dados_pessoais.svg"
                    }
                }, {
                    "type": "LinkButton",
                    "props": {
                        "title": "Descarregar a App",
                        "href": "/Descarregar-a-App",
                        "linkType": "internal",
                        "image": "http://auchan.local/-/media/Images/Mensagens-Feedback/alterar_telemovel.svg"
                    }
                }]
            }
        }]
    }, {
        "name": "Alterar-PIN-Cartao",
        "type": "ScrollScreen",
        "header": "TestHeader",
        "contents": [{
            "type": "Image",
            "props": { "url": "https://oney.pt/-/media/Project/Oney-Sites/Oney-Home/logo.png" }
        }]
    }]
}
*/