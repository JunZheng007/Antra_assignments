function q25(countries) {
    let longestCountry = "";
    for (let country of countries) {
        if (country.length > longestCountry.length) longestCountry = country;
    }
    return longestCountry;
}
