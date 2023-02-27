export const BASE_SIMRAIL_DISPATCH_API = "https://panel.simrail.eu:8091/";
export const BASE_SIMRAIL_API = "https://panel.simrail.eu:8084/";
export const BASE_AWS_API = "https://api1.aws.simrail.eu:8082/api/"

export const srHeaders = {
    "User-Agent": "Custom EDR vDEV",
    "xx-client": "Custom EDR",
    "xx-maintainer": "DeadlyKungFu.Ninja",
    "xx-contact": "DeadlyKungFu.Ninja#8294",
    "xx-executor": "outbound.gcp.infra.deadlykungfu.ninja",
    "xx-message": "Beta access only for you, that monitor this network : https://edr.deadlykungfu.ninja/?betaToken=unjN6"
    // "xx-message": "Please dont ban this IP this is me developing stuff (not production server)"
};

export const internalIdToSrId: {[k: string]: string} = {
    "GW": "Góra Włodowska",
    "PS": "Psary",
    "KN": "Knapówka",
    "WP" : "Włoszczowa Północ",
    "OZ": "Olszamowice",
    "PI": "Pilichowice",
    "KZ": "Katowice_Zawodzie",
    "SG": "Sosnowiec_Główny",
    "SG_R52": "Sosnowiec_Główny R52", // TODO: Fake for staging
    "DG": "Dąbrowa Górnicza",
    "T1_BZ": "Będzin",
    "BZ": "Będzin",
    "LZ_LC": "Łazy Łc",
    "ZA": "Zawiercie",
    "OP_PO": "Opoczno Południe",
    "DG_WZ": "Dąbrowa Górnicza Wschodnia",
    "DG_ZA": "",
    "SG_PO": "Sosnowiec Południowy",
    "IDZ": "Idzikowice"
}

export const newInternalIdToSrId: {[k: string]: string} = {
    "T1_BZ": "124",
    "BZ": "124",
    "LZ_LC": "2375",
    "SG_R52": "3991",
    "SG": "3993",
    "DG": "719",
    "GW": "1193",
    "PS": "3436",
    "KN": "1772",
    "WP": "4987",
    "OZ": "2969",
    "PI": "3200",
    "OP_PO": "2993",
    "ZA": "5262",
    "DG_WZ": "733",
    "SP": "4010",
    "IDZ": "1349",
    "KZ": "1655",
    "SG_PO": "4010"
}

export const POSTS: { [key: string]: string[] } = {
    "GW": [newInternalIdToSrId["GW"]],
    "PS": [newInternalIdToSrId["PS"]],
    "KN": [newInternalIdToSrId["KN"]],
    "WP": [newInternalIdToSrId["WP"]],
    "OZ": [newInternalIdToSrId["OZ"]],
    "PI": [newInternalIdToSrId["PI"]],
    "KZ": [newInternalIdToSrId["KZ"]],
    "SG": [newInternalIdToSrId["SG"], newInternalIdToSrId["SG_R52"]],
    "DG": [newInternalIdToSrId["DG"]],
    "BZ": [newInternalIdToSrId["BZ"]],
    "LZ_LC": [newInternalIdToSrId["LZ_LC"]],
    "ZA": [newInternalIdToSrId["ZA"]],
    "OP": [newInternalIdToSrId["OP_PO"]],
    "DG_WZ": [newInternalIdToSrId["DG_WZ"]],
    "DGZ": [newInternalIdToSrId["DGZ"]],
    "SP": [newInternalIdToSrId["SP"]],
    "IDZ": [newInternalIdToSrId["IDZ"]]

};

export type PURE_POST = 
    "Góra Włodowska" |
    "Psary" |
    "Knapówka" |
    "Włoszczowa Północ" |
    "Olszamowice" |
    "Pilichowice" |
    "Katowice_Zawodzie" |
    "Sosnowiec_Główny" |
    "Sosnowiec_Gł._pzs_R52" |
    "Dąbrowa Górnicza" |
    "Będzin" |
    "Łazy Łc" |
    "Zawiercie" |
    "Opoczno Południe" |
    "Dąbrowa Górnicza Wschodnia" |
    "Dąbrowa Górnicza Ząbkowice" |
    "Sosnowiec Południowy" |
    "Idzikowice"

export enum VMAX_BY_TYPE {
    EIJ = 200,
    ECE = 125,
    MPE = 125,
    RPJ = 120,
    ROJ = 120,
    LTE = 125,
    TME = 80,
    TLE = 80,
    TCE = 85
};

export const translate_fields = {
    "K": "k",
    "NK": "nk",
    "Scheduled arrival": "scheduled_arrival",
    "+/-": "offset",
    "Real arrival": "real_arrival",
    "Type": "type",
    "Train no.": "train_number",
    "From post": "from",
    "To post": "to",
    "Track": "track",
    "Line no.": "line",
    "Layover": "layover",
    "Stop type": "stop_type",
    "P T": "platform",
    "Scheduled departure": "scheduled_departure",
    "Real departure": "real_departure",
    "Start station": "start_station",
    "Terminus station": "terminus_station",
    "Carrier": "carrier"
}

export const verboseStopTypeToStationStopType: {[k: string]: string | null} = {
    "NoStopOver": null,
    "CommercialStop": "ph",
    "NoncommercialStop": "pt",
};

