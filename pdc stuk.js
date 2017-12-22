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
            desc: "best of 13"
        },
        children: [
            {
                text: {
                    name: "Semi Final",
                    desc: "best of 11"
                },
                children: [
                    {
                        text: {
                            name: "Quarter Final",
                            desc: "best of 9"
                        },
                        children: [
                            {
                                text: {
                                    name: "3rd round",
                                    desc: "best of 7"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "2nd round",
                                            desc: "best of 7"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Van Gerwen M. (1)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Van Gerwen M. (1)",
                                                            title: 1
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Kist C.",
                                                            title: 2
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "Wilson J. (32)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Wilson J. (32)",
                                                            title: 3
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Ratajski K.",
                                                            title: 4
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    },
                                    {
                                        text: {
                                            name: "Price G. (16)",
                                            desc: "4-1"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Price G. (16)",
                                                    desc: "3-0"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Price G. (16)",
                                                            title: 5
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Evetts T.",
                                                            title: 6
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "White I.",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "White I.",
                                                            title: 7
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Harris C.",
                                                            title: 8
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    }
                                ] //children 3rd round
                            },
                            {
                                text: {
                                    name: "3rd round",
                                    desc: "best of 7"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Van der Voort V.",
                                            desc: "4-0"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Van der Voort V.",
                                                    desc: "0-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Chisnall D. (8)",
                                                            title: 9
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Van der Voort V.",
                                                            title: 10
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "Beaton S. (25)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Beaton S. (25)",
                                                            title: 11
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "O'Connor W.",
                                                            title: 12
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    },
                                    {
                                        text: {
                                            name: "2nd round",
                                            desc: "best of 7"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Van Barneveld R. (9)",
                                                    desc: "3-0"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Van Barneveld R. (9)",
                                                            title: 13
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "North R.",
                                                            title: 14
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "Anderson K. (24)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Anderson K. (24)",
                                                            title: 15
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Jacques P.",
                                                            title: 16
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    }
                                ] //children 3rd round
                            }
                        ] // children quarter
                    }
                ] //children semi
            },
            {
                text: {
                    name: "Semi Final",
                    desc: "best of 11"
                },
                children: [
                    {
                        text: {
                            name: "Quarter Final",
                            desc: "best of 9"
                        },
                        children: [
                            {
                                text: {
                                    name: "3rd round",
                                    desc: "best of 7"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "2nd round",
                                            desc: "best of 7"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Suljovic M. (5)",
                                                    desc: "3-05"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Suljovic M. (5)",
                                                            title: 17
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Painter K.",
                                                            title: 18
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "Thornton R. (28)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Thornton R. (28",
                                                            title: 19
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Dolan B.",
                                                            title: 20
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    },
                                    {
                                        text: {
                                            name: "Van den Bergh D.",
                                            desc: "2-4"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Dekker J.",
                                                    desc: "1-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Klaasen J. (12)",
                                                            title: 21
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Dekker J.",
                                                            title: 22
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "Van den Bergh D.",
                                                    desc: "1-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Bunting S.",
                                                            title: 23
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Van den Bergh D.",
                                                            title: 24
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    }
                                ] //children 3rd round
                            }
                        ] // children quarter
                    },
                    {
                        text: {
                            name: "Quarter Final",
                            desc: "best of 9"
                        },
                        children: [
                            {
                                text: {
                                    name: "3rd round",
                                    desc: "best of 7"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "2nd round",
                                            desc: "best of 7"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Gurney D. (4)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Gurney D. (4)",
                                                            title: 25
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Huybrechts R.",
                                                            title: 26
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "Henderson J. (29)",
                                                    desc: "3-0"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Henderson J. (29)",
                                                            title: 27
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Kantele M.",
                                                            title: 28
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    },
                                    {
                                        text: {
                                            name: "2nd round",
                                            desc: "best of 7"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Smith M. (13)",
                                                    desc: "3-2"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Smith M. (13)",
                                                            title: 29
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Lennon S.",
                                                            title: 30
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "Cross R. (20)",
                                                    desc: "3-0"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Cross R. (20)",
                                                            title: 31
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "Asada S.",
                                                            title: 32
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    }
                                ] //children 3rd round
                            },
                            {
                                text: {
                                    name: "3rd round",
                                    desc: "best of 7"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "2nd round",
                                            desc: "best of 7"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "1st round",
                                                    desc: "best of 5"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "P1l",
                                                            title: 1
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "P2",
                                                            title: 2
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "1st round",
                                                    desc: "best of 5"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "P3",
                                                            title: 3
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "P4",
                                                            title: 4
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    },
                                    {
                                        text: {
                                            name: "2nd round",
                                            desc: "best of 7"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "1st round",
                                                    desc: "best of 5"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "P5",
                                                            title: 5
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "P6",
                                                            title: 6
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            },
                                            {
                                                text: {
                                                    name: "1st round",
                                                    desc: "best of 5"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "P7",
                                                            title: 7
                                                        },
                                                        image: "flags/rus.jpg",
                                                        HTMLclass: "first-draw"
                                                    },
                                                    {
                                                        text: {
                                                            name: "P8",
                                                            title: 8
                                                        },
                                                        image: "flags/esp.jpg",
                                                        HTMLclass: "first-draw"
                                                    }
                                                ] //children 1st round
                                            }
                                        ] //children 2nd round
                                    }
                                ] //children 3rd round
                            }
                        ] //children quarter
                    }
                ] //children semi
            }
        ] //children winner
    } //nodeStructure
}; //var
