// source:
//

var tree_structure = {
    chart: {
        container: "#OrganiseChart6",
        levelSeparation:    20,
        siblingSeparation:  15,
        subTeeSeparation:   15,
        rootOrientation: "EAST",

        node: {
            HTMLclass: "tennis-draw",
            drawLineThrough: true
        },
        connectors: {
            type: "straight",
            style: {
                "stroke-width": 2,
                "stroke": "#ccc"
            }
        }
    },

    nodeStructure: {
        text: {
            name: "World Champion",
            desc: "best of ?"
        },
        children: [
            {
                text: {
                    name: "Semi Final",
                    desc: "best of ?"
                },
                children: [
                    {
                        text: {
                            name: "Quarter Final",
                            desc: "best of ?"
                        },
                        children: [
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Djokovic, Novak",
                                            title: 1
                                        },
                                        image: "flags/srb.jpg",
                                        HTMLclass: "first-draw",

                                    },
                                    {
                                        text: {
                                            name: "Bye",
                                            title: 2
                                        },
                                        HTMLclass: "first-draw bye"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Youzhny, Mikhail",
                                            title: 3
                                        },
                                        image: "flags/rus.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Gimeno-Traver, Daniel",
                                            title: 4
                                        },
                                        image: "flags/esp.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Quarter Final",
                            desc: "best of ?"
                        },
                        children: [
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                         name: "Gulbis, Ernests",
                                         title: 5
                                     },
                                        image: "flags/lat.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Isner, John",
                                            title: 6
                                        },
                                        image: "flags/usa.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Klizan, Martin",
                                            title: 7
                                        },
                                        image: "flags/slo.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Monaco, Juan",
                                            title: 8
                                        },
                                        image: "flags/arg.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: {
                    name: "Semi Final",
                    desc: "best of ?"
                },
                children: [
                    {
                        text: {
                            name: "Quarter Final",
                            desc: "best of ?"
                        },
                        children: [
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Raonic, Milos",
                                            title: 9
                                        },
                                        image: "flags/can.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Benneteau, Julien",
                                            title: 10
                                        },
                                        image: "flags/fra.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Nieminen, Jarkko",
                                            title: 11
                                        },
                                        image: "flags/fin.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Troicki, Viktor",
                                            title: 12
                                        },
                                        image: "flags/srb.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Quarter Final",
                            desc: "best of ?"
                        },
                        children: [
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Dolgopolov, Alexandr",
                                            title: 13
                                        },
                                        image: "flags/ukr.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Tomic, Bernard",
                                            title: 14
                                        },
                                        image: "flags/aus.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "8th Final",
                                    desc: "best of ?"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Bye",
                                            title: 15
                                        },
                                        HTMLclass: "first-draw bye"
                                    },
                                    {
                                        text: {
                                            name: "Del Potro, Juan Martin",
                                            title: 16
                                        },
                                        image: "flags/arg.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
