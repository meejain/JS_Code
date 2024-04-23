let raw_data = [
    {
        "Company_Name": "Amadeus IT Group SA",
        "New_Relic_Enduser_URL": "amadeus.com"
    },
    {
        "Company_Name": "Ancestry.com Operations Inc",
        "New_Relic_Enduser_URL": "https://www.ancestry.com/dna/"
    },
    {
        "Company_Name": "Coles Supermarkets Australia",
        "New_Relic_Enduser_URL": "https://www.coles.com.au/"
    },
    {
        "Company_Name": "Commonwealth Bank of Australia - Digital",
        "New_Relic_Enduser_URL": "www.commbank.com.au"
    },
    {
        "Company_Name": "Eli Lilly and Co",
        "New_Relic_Enduser_URL": "aem.lilly.com"
    },
    {
        "Company_Name": "Hapag Lloyd AG",
        "New_Relic_Enduser_URL": "www.hapag-lloyd.com"
    },
    {
        "Company_Name": "Hertz",
        "New_Relic_Enduser_URL": "https://www.thrifty.com/"
    },
    {
        "Company_Name": "Informatica",
        "New_Relic_Enduser_URL": "https://www.informatica.com/"
    },
    {
        "Company_Name": "InformaticaDocs",
        "New_Relic_Enduser_URL": "https://docs.informatica.com/"
    },
    {
        "Company_Name": "John Lewis Plc (Enterprise)",
        "New_Relic_Enduser_URL": "https://www.johnlewisfinance.com/"
    },
    {
        "Company_Name": "JP Morgan Chase (Corporate Technology)",
        "New_Relic_Enduser_URL": "https://www.neovest.com/"
    },
    {
        "Company_Name": "Tourism Australia Global",
        "New_Relic_Enduser_URL": "www.australia.com"
    }
]

async function lhsrun(site,customer) {
    const terms = [".json", "?", "granite/core", "404.html", "healthcheck", "jpg", "css", "svg"];
    const result1 = terms.some(term => site.includes(term));
    if (result1) { console.log(customer+"#"+site+"#"+"We need a different URL"); }
    else { console.log(customer+"#"+site); }
}

async function mainfunction() {
    for (let i = 0; i <= raw_data.length; i++) {
        (raw_data[i].New_Relic_Enduser_URL) ? await lhsrun(raw_data[i].New_Relic_Enduser_URL,raw_data[i].Company_Name) : console.log(raw_data[i].Company_Name+"#No End User URL");
    }
}

mainfunction();

