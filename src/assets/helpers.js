function degreesToDirection(degrees) {
    const directions = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
    ];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
}

function weatherCodeToIcon(code) {
    let icon = ""
    switch (code) {
        case 0:
            icon = "sun-fill"
            break;
        case 1:
        case 2:
        case 3:
            icon = "cloud-sun-fill"
            break;
        case 45:
        case 48:
            icon = "cloud-fog2-fill"
            break;
        case 51:
        case 53:
        case 55:
        case 66:
        case 67:
            icon = "cloud-drizzle-fill"
            break;
        case 56:
        case 57:
            icon = "cloud-sleet-fill"
            break;
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            icon = "cloud-rain-fill"
            break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            icon = "cloud-snow-fill"
            break;
        case 95:
            icon = "cloud-lightning-fill"
            break;
        case 96:
        case 99:
            icon = "cloud-lightning-rain-fill"
            break;
        default:
            icon = "sun"
            break;
    }
    return icon
}

export {degreesToDirection, weatherCodeToIcon}