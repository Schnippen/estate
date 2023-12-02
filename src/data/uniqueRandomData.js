const fs = require("fs");

// Replace 'input.json' and 'output.json' with your actual file names
const inputFile = "randomizedBigDataFile.json";
const outputFile = "UniqueRealEstateCleanDataWithZeroes.json";

// Read the JSON file
fs.readFile(inputFile, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading JSON file: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Ensure unique offerIDs
    const newData = ensureUniqueOfferIDs(jsonData);

    // Process priceInfo
    const areaInfoData = areaInfo(newData);
    const landAreaData = landAreaInfo(areaInfoData);
    const areaPriceData = areaPriceInfo(landAreaData);
    const usableData = usableArea(areaPriceData);
    const processedData = processPriceInfo(usableData);

    // Randomize the order of items
    const randomizedData = shuffleArray(processedData);

    // Write the randomized JSON to a new file
    fs.writeFile(outputFile, JSON.stringify(randomizedData, null, 2), (err) => {
      if (err) {
        console.error(`Error writing randomized JSON file: ${err.message}`);
      } else {
        console.log(`Randomized and unique JSON saved to ${outputFile}`);
      }
    });
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
  }
});

// Function to shuffle an array randomly
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Function to ensure unique offerIDs
function ensureUniqueOfferIDs(data) {
  const idMap = new Map();

  for (let i = 0; i < data.length; i++) {
    const offerID = data[i].offerID;

    if (idMap.has(offerID)) {
      // Duplicate found, increment and update the offerID
      let newOfferID = offerID;
      while (idMap.has(newOfferID)) {
        newOfferID++;
      }
      data[i].offerID = newOfferID;
    }

    // Update the map with the latest offerID
    idMap.set(data[i].offerID, true);
  }

  return data;
}

// Function to process priceInfo
function processPriceInfo(data) {
  return data.map((property) => {
    // Check if the object is null
    //console.log(property.priceInfo);
    if (property === null || typeof property !== "object") {
      return;
    }

    // Check if priceInfo property exists
    if (!("priceInfo" in property)) {
      return;
    }
    const priceInfo = property.priceInfo;
    if (priceInfo === null) {
      return;
    }
    if (typeof priceInfo !== "string") {
      return;
    }
    // If the priceInfo is "Zapytaj o cenę", leave it unchanged
    if (priceInfo === "Zapytaj o cenę") {
      return { ...property, priceInfo: "000000" };
    }
    //console.log("priceInfo", property.priceInfo);

    // Remove the "zł" part and leave only the numeric value
    const numericPrice = parseInt(priceInfo.replace(/\D/g, ""), 10);

    // Update the property object with the processed priceInfo
    return { ...property, priceInfo: numericPrice };
  });
}

// Function to process areaInfo
function areaInfo(data) {
  return data.map((property) => {
    //console.log("areaInfo", property.areaInfo);
    const areaInfo = property.areaInfo;
    if (areaInfo === null) {
      return { ...property, areaInfo: "" };
    }
    if (typeof areaInfo !== "string") {
      return { ...property, areaInfo: "" };
    }

    // If the priceInfo is "Zapytaj o cenę", leave it unchanged
    if (areaInfo === "Zapytaj o cenę") {
      return { ...property, areaInfo: "" };
    }

    // Remove the "zł" part and leave only the numeric value
    const numericPrice = parseInt(areaInfo.replace(/\D/g, ""), 10);

    // Update the property object with the processed priceInfo
    return { ...property, areaInfo: numericPrice };
  });
}
// Function to process landAreaInfo
function landAreaInfo(data) {
  //console.log(data);
  return data.map((property) => {
    // Check if the object is null
    if (property === null || typeof property !== "object") {
      return { ...property, landAreaInfo: "" };
    }

    // Check if landAreaInfo property exists
    if (!("landAreaInfo" in property)) {
      return { ...property, landAreaInfo: "" };
    }

    //console.log(property.landAreaInfo);
    const landArea = property.landAreaInfo;

    // Check if landArea is null or undefined
    if (landArea === null) {
      return { ...property, landAreaInfo: "" };
    }

    // Ensure landArea is a string before applying operations
    if (typeof landArea !== "string") {
      return { ...property, landAreaInfo: "" };
    }

    // If the landArea is "Zapytaj o cenę", leave it unchanged
    if (landArea === "Zapytaj o cenę") {
      return { ...property, landAreaInfo: "" };
    }

    // Remove non-numeric characters and convert to integer
    const numericLandArea = parseInt(landArea.replace(/\D/g, ""), 10);

    // Update the property object with the processed landAreaInfo
    return { ...property, landAreaInfo: numericLandArea };
  });
}

// Function to process landAreaInfo
function areaPriceInfo(data) {
  return data.map((property) => {
    /* if (property === null || typeof property !== "object") {
      return { ...property, areaPriceInfo: "" };
    }
    
    // Check if areaPriceInfo property exists
    if (!("areaPriceInfo" in property)) {
      return { ...property, areaPriceInfo: "" };
    } */

    console.log("areaPriceInfo", property.areaPriceInfo);

    const areaPrice = property.areaPriceInfo;
    console.log(areaPrice);
    /* if (areaPrice === null) {
      return { ...property, areaPriceInfo: "" };
    } */
    /*  if (typeof areaPriceInfo !== "string") {
      return { ...property, areaPriceInfo: "" };
    } */
    // If the priceInfo is "Zapytaj o cenę", leave it unchanged
    if (areaPrice === "Zapytaj o cenę") {
      return { ...property, areaPriceInfo: "" };
    }
    if (areaPrice === undefined) {
      return { ...property, areaPriceInfo: "" };
    }
    // Remove the "zł" part and leave only the numeric value
    const numericPrice = parseFloat(
      areaPrice.replace(/[^\d,]/g, "").replace(",", ".")
    );

    // Update the property object with the processed priceInfo
    return { ...property, areaPriceInfo: numericPrice };
  });
}

function usableArea(data) {
  //console.log(data);
  return data.map((property) => {
    // Check if the object is null
    if (property === null || typeof property !== "object") {
      return { ...property, usableArea: "" };
    }

    // Check if usableArea property exists
    if (!("usableArea" in property)) {
      return { ...property, usableArea: "" };
    }

    //console.log(property.usableArea);
    const landArea = property.usableArea;

    // Check if landArea is null or undefined
    if (landArea === null) {
      return { ...property, usableArea: "" };
    }

    // Ensure landArea is a string before applying operations
    if (typeof landArea !== "string") {
      return { ...property, usableArea: "" };
    }

    // If the landArea is "Zapytaj o cenę", leave it unchanged
    if (landArea === "Zapytaj o cenę") {
      return { ...property, usableArea: "" };
    }

    // Remove non-numeric characters and convert to integer
    const numericLandArea = parseInt(landArea.replace(/\D/g, ""), 10);

    // Update the property object with the processed usableArea
    return { ...property, usableArea: numericLandArea };
  });
}
