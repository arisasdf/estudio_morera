# Rosarium

I'm a whimsy little girl so I've chosen to create a "design system" and Gemini helped me give it a very cringey gothy name. It's just a handful of components and styles that I want to keep unified but I'll just go with it.

Here's a smattering of notes but hopefully I can make a Storybook eventually.

## Palettes

Palettes generated with [Significa's palette generator](https://palette-generator.significa.co/?c=0D734C&s=10&cs=0.1&cm=0)

### Rosarium

> **rŏsārĭum**<br/>
> _neutral noun II declension_
>
> 1 rosary<br/>
> 2 rose-garden<br/>
> 3 rose-bed

#### Old Palette (#b33458)
![Rosarium color palette](app/assets/images/rosarium/palette-rosarium.png)

```json
[
  "#2a0003",
  "#55001b",
  "#831138",
  "#b33458",
  "#d8637e",
  "#fc90a6",
  "#ffbecf",
  "#ffe4f2",
]
```

#### New Palette (#a6305d)

```json
  rosarium: {
    25: "#fbf4f8",
    50: "#f9eaf2",
    100: "#f1c6dd",
    200: "#e9a5c8",
    300: "#e185b2",
    400: "#c4457a",
    500: "#a6305d",
    600: "#892b4e",
    700: "#6e213e",
    800: "#5b1a31",
    900: "#451224",
  },
```

### Silva

> **silva**<br/>
> _feminine noun I declension_
>
> 1 wood, forest<br/>
> 2 (poetic) branches, bushes, shrubbery, bush<br/>
> 3 (in the plural) trees, plants

![Silva color palette](app/assets/images/rosarium/palette-silva.png)

```json
[
  "#000c00",
  "#002b11",
  "#004e2d",
  "#0d734c", // Silva
  "#4b9772",
  "#7abc99",
  "#a8e3c3",
  "#d8ffee"
]
```

(blue: nox/mare/aequor/indicum, purple: viola/dircium/crepusculum)

night, sea, surface of the sea, indigo / violet, nightshade, twilight

### Grayscale

10% lightness step

```json
[
  "#000000",
  "#1a1a1a",
  "#333333",
  "#4d4d4d",
  "#666666",
  "#808080",
  "#999999",
  "#b3b3b3",
  "#cccccc",
  "#e6e6e6",
  "#ffffff"
]
```
