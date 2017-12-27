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
            desc: "1 Jan 21:00 CET"
        },
        children: [
            {
                text: {
                    name: "Semi Final 1",
                    desc: "30 Dec 20:30 CET"
                },
                children: [
                    {
                        text: {
                            name: "Quarter Final 1",
                            desc: "29 Dec"
                        },
                        children: [
                            {
                                text: {
                                    name: "3rd round 1",
                                    desc: "27 Dec 20:00 CET"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Van Gerwen M. (1)",
                                            desc: "4-0"
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
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Kist C.",
                                                            title: 2
                                                        },
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 1-2
                                            }, //1st round 1
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
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Ratajski K.",
                                                            title: 4
                                                        },
                                                        image: "flags/Poland.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 3-4
                                            }, // 1st round 2
                                        ] //children 2nd round 1
                                    }, //2nd round 1
                                    {
                                        text: {
                                            name: "Price G. (16)2",
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
                                                        image: "flags/Wales.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Evetts T.",
                                                            title: 6
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 5-6
                                            }, //1st round 3
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
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Harris C.",
                                                            title: 8
                                                        },
                                                        image: "flags/New-Zealand.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 7-8
                                            }, // 1st round 4
                                        ] //children 2nd round 2
                                    } // 2nd round 2
                                ] //children 3rd round 1
                            }, //3rd round 1
                            {
                                text: {
                                    name: "3rd round 2",
                                    desc: "27 Dec 20:00 CET"
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
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Van der Voort V.",
                                                            title: 10
                                                        },
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 9-10
                                            }, //1st round 5
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
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "O'Connor W.",
                                                            title: 12
                                                        },
                                                        image: "flags/Ireland.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 11-12
                                            }, // 1st round 6
                                        ] //children 2nd round 3
                                    }, //2nd round 3
                                    {
                                        text: {
                                            name: "Van Barneveld R. (9)",
                                            desc: "4-1"
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
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "North R.",
                                                            title: 14
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 13-14
                                            }, //1st round 7
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
                                                        image: "flags/Australia.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Jacques P.",
                                                            title: 16
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 15-16
                                            }, // 1st round 8
                                        ] //children 2nd round 4
                                    } // 2nd round 4
                                ] //children 3rd round 2
                            } // 3rd round 2
                        ] //children quarter 1
                    }, //quarter 1
                    {
                        text: {
                            name: "Quarter Final 2",
                            desc: "29 Dec"
                        },
                        children: [
                            {
                                text: {
                                    name: "3rd round 3",
                                    desc: "28 Dec 13:30 CET"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Suljovic M. (5)",
                                            desc: "4-2"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Suljovic M. (5)",
                                                    desc: "3-0"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Suljovic M. (5)",
                                                            title: 17
                                                        },
                                                        image: "flags/Austria.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Painter K.",
                                                            title: 18
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 17-18
                                            }, //1st round 9
                                            {
                                                text: {
                                                    name: "Thornton R. (28)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Thornton R. (28)",
                                                            title: 19
                                                        },
                                                        image: "flags/Scotland.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Dolan B.",
                                                            title: 20
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 19-20
                                            }, // 1st round 9
                                        ] //children 2nd round 5
                                    }, //2nd round 5
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
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Dekker J.",
                                                            title: 22
                                                        },
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 21-22
                                            }, //1st round 11
                                            {
                                                text: {
                                                    name: "Van den Bergh D.",
                                                    desc: "1-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Bunting S. (21)",
                                                            title: 23
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Van den Bergh D.",
                                                            title: 24
                                                        },
                                                        image: "flags/Belgium.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 23-24
                                            }, // 1st round 12
                                        ] //children 2nd round 6
                                    } // 2nd round 6
                                ] //children 3rd round 3
                            }, //3rd round 3
                            {
                                text: {
                                    name: "3rd round 4",
                                    desc: "28 Dec 13:30 CET"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Henderson J. (29)",
                                            desc: "2-4"
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
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Huybrechts R.",
                                                            title: 26
                                                        },
                                                        image: "flags/Belgium.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 25-26
                                            }, //1st round 13
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
                                                        image: "flags/Scotland.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Kantele M.",
                                                            title: 28
                                                        },
                                                        image: "flags/Finland.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 27-28
                                            }, // 1st round 14
                                        ] //children 2nd round 7
                                    }, //2nd round 7
                                    {
                                        text: {
                                            name: "Cross R. (20)",
                                            desc: "3-4"
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
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Lennon S.",
                                                            title: 30
                                                        },
                                                        image: "flags/Ireland.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 29-30
                                            }, //1st round 15
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
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Asada S.",
                                                            title: 32
                                                        },
                                                        image: "flags/Japan.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 31-32
                                            }, // 1st round 16
                                        ] //children 2nd round 8
                                    } // 2nd round 8
                                ] //children 3rd round 4
                            } // 3rd round 4
                        ] //children quarter 2
                    } // quarter 2
                ] //children semi 1
            }, //semi 1
            {
                text: {
                    name: "Semi Final 2",
                    desc: "30 Dec 20:30 CET"
                },
                children: [
                    {
                        text: {
                            name: "Quarter Final 3",
                            desc: "29 Dec"
                        },
                        children: [
                            {
                                text: {
                                    name: "3rd round 5",
                                    desc: "28 Dec 20:00 CET"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "2nd round 9",
                                            desc: "27 Dec 20:00 CET"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Wright P. (2)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Wright P. (2)",
                                                            title: 33
                                                        },
                                                        image: "flags/Scotland.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Portela D.",
                                                            title: 34
                                                        },
                                                        image: "flags/Brazil.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 33-34
                                            }, //1st round 17
                                            {
                                                text: {
                                                    name: "Lewis J.",
                                                    desc: "0-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Clayton J. (31)",
                                                            title: 35
                                                        },
                                                        image: "flags/Wales.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Lewis J.",
                                                            title: 36
                                                        },
                                                        image: "flags/Wales.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 35-36
                                            }, // 1st round 18
                                        ] //children 2nd round 9
                                    }, //2nd round 9
                                    {
                                        text: {
                                            name: "2nd round 10",
                                            desc: "27 Dec 13:30 CET"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Norris A. (15)",
                                                    desc: "3-0"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Norris A. (15)",
                                                            title: 37
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Viljanen K.",
                                                            title: 38
                                                        },
                                                        image: "flags/Finland.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 37-38
                                            }, //1st round 19
                                            {
                                                text: {
                                                    name: "Richardson J.",
                                                    desc: "0-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Huybrechts K. (18)",
                                                            title: 39
                                                        },
                                                        image: "flags/Belgium.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Richardson J.",
                                                            title: 40
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 39-40
                                            }, // 1st round 20
                                        ] //children 2nd round 10
                                    } // 2nd round 10
                                ] //children 3rd round 5
                            }, //3rd round 5
                            {
                                text: {
                                    name: "3rd round 6",
                                    desc: "28 Dec 13:30 CET"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "2nd round 11",
                                            desc: "27 Dec 13:30 CET"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Munch K.",
                                                    desc: "1-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Lewis A. (7)",
                                                            title: 41
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Munch K.",
                                                            title: 42
                                                        },
                                                        image: "flags/Germany.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 41-42
                                            }, //1st round 21
                                            {
                                                text: {
                                                    name: "Alcinas A.",
                                                    desc: "1-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Reyes C. (26)",
                                                            title: 43
                                                        },
                                                        image: "flags/Spain.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Alcinas A.",
                                                            title: 44
                                                        },
                                                        image: "flags/Spain.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 43-44
                                            }, // 1st round 22
                                        ] //children 2nd round11
                                    }, //2nd round 11
                                    {
                                        text: {
                                            name: "2nd round 12",
                                            desc: "27 Dec 13:30 CET"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Whitlock S. (10)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Whitlock S. (10)",
                                                            title: 45
                                                        },
                                                        image: "flags/Australia.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Schindler M.",
                                                            title: 46
                                                        },
                                                        image: "flags/Germany.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 45-46
                                            }, //1st round 23
                                            {
                                                text: {
                                                    name: "Webster D. (23)",
                                                    desc: "3-2"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Webster D. (23)",
                                                            title: 47
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Petersen D.",
                                                            title: 48
                                                        },
                                                        image: "flags/South-Africa.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 47-48
                                            }, // 1st round 24
                                        ] //children 2nd round 12
                                    } // 2nd round 12
                                ] //children 3rd round 6
                            } // 3rd round 6
                        ] //children quarter 3
                    }, //quarter 3
                    {
                        text: {
                            name: "Quarter Final 4",
                            desc: "29 Dec"
                        },
                        children: [
                            {
                                text: {
                                    name: "3rd round 7",
                                    desc: "28 Dec 20:00 CET"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Taylor P. (6)",
                                            desc: "4-0"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Taylor P. (6)",
                                                    desc: "3-1"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Taylor P. (6)",
                                                            title: 49
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Dobey Ch.",
                                                            title: 50
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 49-50
                                            }, //1st round 1
                                            {
                                                text: {
                                                    name: "Pipe J. (27)",
                                                    desc: "3-2"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Pipe J. (27)",
                                                            title: 51
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Smith B.",
                                                            title: 52
                                                        },
                                                        image: "flags/New-Zealand.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 51-52
                                            }, // 1st round 26
                                        ] //children 2nd round 13
                                    }, //2nd round 13
                                    {
                                        text: {
                                            name: "Brown K.",
                                            desc: "4-2"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Brown K.",
                                                    desc: "2-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Wade J. (11)",
                                                            title: 53
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Brown K.",
                                                            title: 54
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 53-54
                                            }, //1st round 27
                                            {
                                                text: {
                                                    name: "Lerchbacher Z.",
                                                    desc: "2-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "King M. (22)",
                                                            title: 55
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Lerchbacher Z.",
                                                            title: 56
                                                        },
                                                        image: "flags/Austria.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 55-56
                                            }, // 1st round 28
                                        ] //children 2nd round 14
                                    } // 2nd round 14
                                ] //children 3rd round 7
                            }, //3rd round 7
                            {
                                text: {
                                    name: "3rd round 8",
                                    desc: "28 Dec 20:00 CET"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Anderson G. (3)",
                                            desc: "4-1"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "Anderson G. (3)",
                                                    desc: "3-0"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Anderson G. (3)",
                                                            title: 57
                                                        },
                                                        image: "flags/Scotland.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Smith J.",
                                                            title: 58
                                                        },
                                                        image: "flags/Canada.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 57-58
                                            }, //1st round 29
                                            {
                                                text: {
                                                    name: "Lim P.",
                                                    desc: "2-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Webster M. (30)",
                                                            title: 59
                                                        },
                                                        image: "flags/Wales.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Lim P.",
                                                            title: 60
                                                        },
                                                        image: "flags/Singapore.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 59-60
                                            }, // 1st round 30
                                        ] //children 2nd round 15
                                    }, //2nd round 15
                                    {
                                        text: {
                                            name: "West S.",
                                            desc: "4-1"
                                        },
                                        children: [
                                            {
                                                text: {
                                                    name: "West S.",
                                                    desc: "1-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Van de Pas B. (14)",
                                                            title: 61
                                                        },
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "West S.",
                                                            title: 62
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 13-14
                                            }, //1st round 7
                                            {
                                                text: {
                                                    name: "Wattimena J.",
                                                    desc: "2-3"
                                                },
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Cullen J. (19)",
                                                            title: 63
                                                        },
                                                        image: "flags/United-Kingdom.png",
                                                        HTMLclass: "first-draw",

                                                    },
                                                    {
                                                        text: {
                                                            name: "Wattimena J.",
                                                            title: 64
                                                        },
                                                        image: "flags/Netherlands.png",
                                                        HTMLclass: "first-draw",
                                                    }
                                                ] // Players 63-64
                                            }, // 1st round 32
                                        ] //children 2nd round 16
                                    } // 2nd round 16
                                ] //children 3rd round 8
                            } // 3rd round 8
                        ] //children quarter 4
                    } // quarter 4
                ] //children semi 2
            } // semi 2
        ] //children winner
    } //nodeStructure
}; //var
