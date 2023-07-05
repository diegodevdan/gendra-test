
/**
 * @param {Array} tenders
*/
export const tendersToCardProps = (tenders) => tenders.map((tender) => ({
    title: tender.compiledRelease.tender.title,
    publiser: tender.compiledRelease.publisher?.name,
    date: tender.compiledRelease.date,
    id: tender.compiledRelease.tender.id,
    ocid: tender.compiledRelease.ocid,
    contracts: tender.compiledRelease.contracts?.length,
    parties: tender.compiledRelease.parties?.length,
    winners: tender.compiledRelease.awards?.length,
}));
