const images = {
  smartphones:
    "https://img.freepik.com/psd-gratuit/maquette-smartphone-plein-ecran_53876-65968.jpg?w=740&t=st=1694031390~exp=1694031990~hmac=88989e6f8c1be9f91d3f5e8d9ef38adc75c9bb478f4e7dd173808848a6cef194",
  laptops:
    "https://img.freepik.com/psd-gratuit/maquette-pour-ordinateur-portable-isolee_1310-1458.jpg?w=740&t=st=1694031666~exp=1694032266~hmac=ca1fd94ebd6ee6fbeb5edd403c94264ce16ac8a23454f56fd423e2f0f16ebfbe",
  fragrances:
    "https://img.freepik.com/photos-gratuite/bouteille-parfum-noir-vue-face-design-jaune-isole-mur-blanc_140725-11600.jpg?w=740&t=st=1694031767~exp=1694032367~hmac=bc6693c8a9d55b4f10d873288b73496538cc3cd2d945cbd05e1efdfa72df1589",
  skincare:
    "https://img.freepik.com/photos-premium/glissez-lueur-prise-vue-studio-belle-jeune-femme-essuyant-son-visage-du-coton-fond-gris_590464-15111.jpg?w=360",
  groceries:
    "https://img.freepik.com/vecteurs-libre/panier-achat-illustration-vectorielle-nourriture-panier-produit-acheter-au-supermarche-illustration-vectorielle_1284-47048.jpg?w=740&t=st=1694032230~exp=1694032830~hmac=43560ce438747981f6e95eeaee00e7b00c7c61e298d94097caebaae625e4c822",
  "home-decoration":
    "https://img.freepik.com/photos-gratuite/fauteuil-dans-salon-vert-espace-copie_43614-910.jpg?w=740&t=st=1694032360~exp=1694032960~hmac=060ebd78c3a8b4deb9961877cc66b1ac76288dd3ef62858e72bdee6cd46925a0",
  furniture:
    "https://img.freepik.com/psd-gratuit/fauteuil-oreiller_176382-861.jpg?w=740&t=st=1694033119~exp=1694033719~hmac=0defac982f08b3c1890e4d0e1397d280f89634bda9d0527185587a3e65972dc0",
  tops: "https://img.freepik.com/psd-gratuit/devant-t-shirt-noir-isole_125540-1167.jpg?w=740&t=st=1694033302~exp=1694033902~hmac=897e279e47735fce3f65b30ab6ce9edd99cf3578b7d245ddb9c97f4ca52a849c",
  "womens-dresses":
    "https://img.freepik.com/photos-gratuite/femme-mode-vetements_1203-8302.jpg?w=360&t=st=1694038640~exp=1694039240~hmac=733d3b1cd9a1a9564902f75e7b8b43a49c3516a481992ec43b8849d563085fab",
  "womens-shoes":
    "https://img.freepik.com/vecteurs-libre/ensemble-chaussures-femme_1284-23173.jpg?w=740&t=st=1694038798~exp=1694039398~hmac=1a8e773fcbb9d60d8fda825aea51e9dc012faf73a349b621ff4c6ec79fe81700",
  "mens-shoes":
    "https://img.freepik.com/vecteurs-libre/realistic-boots-set-with-cassic-style-symbols-isolated-vector-illustration_1284-83119.jpg?t=st=1694038821~exp=1694039421~hmac=7f9ede04e234f78f3215cfee370bcc37b6229ae535062c3ebcaab434a55c3d67",
  "mens-shirts":
    "https://img.freepik.com/photos-premium/nouvelles-chemises-habillees-pour-hommes-pliees-pressees_41389-79.jpg?w=740",
  "mens-watches":
    "https://img.freepik.com/vecteurs-libre/ensemble-montres-realistes_1284-11684.jpg?w=740&t=st=1694039143~exp=1694039743~hmac=7ea4ffa7d5fc12108ad9ffb1f65fa19051921d5590265fc063222e1881226a8e",
  "womens-watches":
    "https://img.freepik.com/photos-premium/montre-or-strass_125367-21.jpg?w=740",
  "womens-bags":
    " https://img.freepik.com/photos-premium/sac-main-dore-noir-poignee_688921-3286.jpg?w=740",
  "womens-jewellery":
    "https://img.freepik.com/photos-premium/collier-or-presentoir-collier_28549-330.jpg?w=360",
  sunglasses:
    "https://img.freepik.com/vecteurs-libre/ensemble-huit-images-realistes-lunettes-soleil-isolees-modeles-lunettes-soleil-forme-couleur-differentes_1284-32261.jpg?w=740&t=st=1694039727~exp=1694040327~hmac=b68a6142f53d7d40c3708b5ac1b21248472e214f22e4caa2b257ecb3bc7e14be",
  motorcycle:
    "https://img.freepik.com/vecteurs-libre/vehicule_1308-3128.jpg?w=740&t=st=1694039942~exp=1694040542~hmac=0039fa8985eac2aa2cf2e27f057a5dd878c911b048c40193417d7fdfdaaac3eb",
  lighting:
    "https://img.freepik.com/photos-gratuite/gros-plan-selectif-large-ampoules-lumineuses-suspendues-plafond_181624-2571.jpg?w=740&t=st=1694039999~exp=1694040599~hmac=7dca0f2905b523fa9d308a73781a08e402b9b967bb7479c47ad6347ea439a5ab",
  automotive:
    "https://img.freepik.com/photos-premium/voiture-retro-isolee-fond-blanc-vehicule-legendaire-vintage_87543-21032.jpg?w=740",
};

export const popResultsWithImages = (categories) => {
  const catImage = categories.map((c) => ({
    label: c,
    image: images[c],
  }));
  return catImage;
};
