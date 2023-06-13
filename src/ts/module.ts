Hooks.once("ready", async function () {
  console.log("Plot - TODO List - Ready!");

  // Create a new Foundry VTT document journal entry which is blank with the name "TODO List"
  let journalEntry = await JournalEntry.create({ name: "TODO List" });

  // Move the journal entry to the "Plot" folder
    // @ts-ignore
  await journalEntry.update({ folder: "Plot" });

  // Log the created journal entry
  console.log("Created Journal Entry: ", journalEntry);

  // If the journal entry already exists do nothing
    if (journalEntry) {
    return;
    }
});