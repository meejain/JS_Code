let raw_data = [
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/search"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/community-facilities"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/community-facilities/american-cancer-society---hope-lodge"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/community-facilities/hinds-community-college"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/community-facilities/purks-ymca"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/community-facilities/talledega-college"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/community-facilities/the-mill-at-mississippi-state-university"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/community-facilities/waterfront-rescue-mission"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/healthcare"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/healthcare/baptist-medical-center-leake-hospital"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/healthcare/field-memorial-community-hospital"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/manufacturing-industrial"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/manufacturing-industrial/mississippi-silicon"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/manufacturing-industrial/mueller-industries--inc-"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/manufacturing-industrial/nemak-alabama"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/manufacturing-industrial/precision-engineering--inc-"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/retail"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/retail/buc-ee-s"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/projects/retail/outlets-of-mississippi"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/about"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/about/about-scc"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/about/about-scc/services"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/about/about-scc/contact-us"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/errors"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/errors/500"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/scc/errors/404"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/commercial"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/commercial/business-lines"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/commercial/employer-solutions"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/commercial/captive-solutions"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/commercial/bond---surety"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/homeowners"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/automobile"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/liability-umbrellas"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/other-personal"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/other-personal/disability-insurance"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/other-personal/long-term-care-insurance"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/other-personal/life-insurance"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/personal-lines/other-personal/health-insurance"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/quick-links"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/quick-links/coi-direct"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/quick-links/risk-management-center"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/solutions/quick-links/pay-premium"
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com/fbbi/client-resources"
    }
]

async function lhsrun(site, customer) {
    const terms = [".json", "?", "granite/core", "404.html", "healthcheck", "jpg", "css", "svg", "*"];
    const result1 = terms.some(term => site.includes(term));
    if (result1) { console.log(customer + "#" + site + "#" + "We need a different URL"); }
    else {
        const conditions = ["Unable to process request"];
        const urlMobile = setUpQueryMobile(site);
        const urlDesktop = setUpQueryDesktop(site);
        const responseMobile = await fetchURL(urlMobile);
        const responseDesktop = await fetchURL(urlDesktop);
        (responseMobile.error) ? ((conditions.some(el => responseMobile.error.message.includes(el))) ? lhsrun(site, customer) : console.log(customer + "#" + site + "#" + " LHS is erroring with " + responseMobile.error.message)) : console.log(customer + "#" + site + "#" + (Math.round(responseMobile.lighthouseResult.categories.performance.score * 100) + "%") + "#" + (Math.round(responseDesktop.lighthouseResult.categories.performance.score * 100) + "%"));
        // (responseMobile.error) ? ((conditions.some(el => responseMobile.error.message.includes(el))) ? lhsrun(site, customer) : console.log(customer + "#" + site + "#" + " LHS is erroring with " + responseMobile.error.message)) : console.log(customer + "#" + site + "#" + (Math.round(responseMobile.lighthouseResult.categories.performance.score * 100) + "%"));
    }
}

 async function fetchURL(url) {
    const resp = await fetch(url);
    const response = await resp.json();
    return response;
 }

 function setUpQueryMobile(site) {
    const YOUR_API_KEY = "AIzaSyCwZkCTnraHXOjnCWuq2oxXJOE-ll1hzuI";
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    if (!site.startsWith('http')){ site = "https://" + site; }
    const parameters = {
        url: encodeURIComponent(site)
    };
    let query = `${api}?`;
    for (let key in parameters) {
        query += `${key}=${parameters[key]}`;
    }
    // Add API key at the end of the query
    query += "&strategy=mobile";
    query += `&key=${YOUR_API_KEY}`;
    return query;
}

function setUpQueryDesktop(site) {
    const YOUR_API_KEY = "AIzaSyCwZkCTnraHXOjnCWuq2oxXJOE-ll1hzuI";
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    if (!site.startsWith('http')){ site = "https://" + site; }
    const parameters = {
        url: encodeURIComponent(site)
    };
    let query = `${api}?`;
    for (let key in parameters) {
        query += `${key}=${parameters[key]}`;
    }
    // Add API key at the end of the query
    query += `&key=${YOUR_API_KEY}`;
    return query;
}

async function mainfunction() {
    for (let i = 0; i <= (raw_data.length-1); i++) {
        if ((!raw_data[i].Company_Name) && (!raw_data[i].New_Relic_Enduser_URL)) { console.log("\n"); continue; }
        (raw_data[i].New_Relic_Enduser_URL) ? await lhsrun(raw_data[i].New_Relic_Enduser_URL,raw_data[i].Company_Name) : console.log(raw_data[i].Company_Name+"##No New_Relic_Enduser_URL");
    }
}

mainfunction();

