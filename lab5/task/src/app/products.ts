export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  img: string;
  rating: number;
  category: string;
  numOfLikes: number;
}

export const products = [
  {
    id: 1,
    name: 'Bamboo Palm',
    price: 199,
    description: 'With dense foliage and lush fronds, the Bamboo Palm makes a statement. An air-purifying plant adaptable to low light, this palm can reach heights of up to 8 feet tall in the right conditions.',
    link: '',
    img: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_bamboo-palm_stone-1-768x938.jpg?ver=279689',
    rating: 9.5,
    category:'Pet-Friendly Plants',
    numOfLikes: 0
  },
  {
    id: 2,
    name: 'Bromeliad Guzmania Purple',
    price: 79,
    description: 'Featuring a striking purple bloom, the Bromeliad Purple is a beautiful flowering plant to add a touch of the tropics to your space. It is easy to care for with a unique way of watering. Keep the center of the plant, known as the “vase,” halfway filled with water and water the soil infrequently. Keep in indirect light and boost humidity around your plant by using a mister and your plant will thank you by producing pups in the future.',
    link:'',
    img:'https://bloomscape.com/wp-content/uploads/2023/01/BLOOMSCAPE_Purple_Bromeliad_2102-768x922.jpg?ver=997192',
    rating: 8.1,
    category:'Pet-Friendly Plants',
    numOfLikes: 0
  },
  {
    id: 3,
    name: 'Bromeliad Collection',
    price: 79,
    description: 'The Bromeliad Collection has three playful bromeliads featuring stunningly impressive orange, maroon, and red flowers. With Bromeliad Guzmania Sky, Bromeliad Guzmania Lydia, and Bromeliad Vriesea Tosca, these easy-going bromeliads offer long-lasting, incandescent blooms that add a splash of color to any space. Each plant blooms once in its lifetime but will continue to grow “pups” that eventually will produce their own gorgeous flower.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/07/bloomscape_bromeliad-collection_white-768x922.jpg?ver=916000',
    rating: 8.2,
    category:'Pet-Friendly Plants',
    numOfLikes: 0
  },
  {
    id: 4,
    name: 'Money Tree Stump',
    price: 99,
    description: 'The Money Tree Stump is a perfect, low-care indoor foliage plant to give you a tropical feel with a touch of good fortune. With its stout trunk and bright green palm-like leaves, it looks both like a tree and a tiny palm. The Money Tree gets its name in part from the natural Feng Shui this plant gives. It’s believed this plant will bring positive energy and good luck to the owner. The Money Tree is perfect as a meaningful gift or your own good luck charm.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/06/bloomscape_money-tree-stump_lg_stone-768x922.jpg?ver=902507',
    rating: 8.5,
    category:'Pet-Friendly Plants',
    numOfLikes: 0
  },
  {
    id: 5,
    name: 'Cat Palm',
    price: 199,
    description: 'The Cat Palm is sure to become a favorite thanks to its lush tropical appearance and dense green foliage. The Cat Palm’s fluffy leaves and short trunk give the feeling of a jungle oasis in your very own home. As one of our fullest plants, this palm is ready to make a statement. The Cat Palm is easy to care for and prefers indirect bright light.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/06/bloomscape_cat-palm_xxl_charcoal-768x922.jpg?ver=902621',
    rating: 8.3,
    category:'Pet-Friendly Plants',
    numOfLikes: 0
  },
  {
    id: 6,
    name: 'Jade Plant',
    price: 39,
    description: 'Jade Plants are one of the most beloved succulents. This easy to care for, long-lasting plant can be passed down for generations, becoming your own family heirloom. Keep in indirect to bright light and water only when the soil is completely dry. Keep this plant’s round leaves pest-free by dusting regularly.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_Jade_small_charcoal_Angle2-scaled-e1640212012283-768x960.jpg?ver=639513',
    rating: 9.1,
    category: 'Low-Maintenance Plants',
    numOfLikes: 0
  },
  {
    id: 7,
    name: 'Whale Fin Sansevieria',
    price: 79,
    description: 'Making a huge statement with just one leaf, the Whale Fin Sansevieria is quite the standout among houseplants. These Sansevierias do well with infrequent waterings and can tolerate low to indirect bright light. Dust regularly to deter pests and keep the unique dappled pattern looking its best.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_SansevieriaMasoniana_medium_Charcoal-768x960.jpg?ver=640205',
    rating: 8.3,
    category: 'Low-Maintenance Plants',
    numOfLikes: 0
  },
  {
    id: 8,
    name: 'Kangaroo Fern',
    price: 79,
    description: 'This lively and pet-friendly fern has unique deep green fronds. The Kangaroo Fern grows long fuzzy roots known as rhizomes; when in its natural habitat, this plant uses these roots to spread across the forest floor. Mist your fern often to mimic its natural humid environment.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_KangarooFern_medium_Charcoal-768x960.jpg?ver=639598',
    rating: 9.3,
    category: 'Low-Maintenance Plants',
    numOfLikes: 0
  },
  {
    id: 9,
    name: 'Prickly Pear Cactus',
    price: 69,
    description: 'A playful cactus with pads shaped like a beavertail, the Prickly Pear Cactus is a low-maintenance plant with a no-fuss care routine with infrequent watering and fertilizing.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_prickly-pear-cactus_charcoal-e1625250902451-768x920.jpg?ver=279300',
    rating: 8.2,
    category: 'Low-Maintenance Plants',
    numOfLikes: 0
  },
  {
    id: 10,
    name: 'Beginner Bundle',
    price: 99,
    description: 'Whether you’re just starting your plant parent journey or you want to help a loved one get started on theirs, the Beginner Bundle has you covered. Meet the easy-going Hedgehog Aloe and ZZ Plant. Both these plants’ thick foliage helps store water, so you don’t need to worry about missing a watering or two. In short, they are easy-care starter plants sure to help you grow your green thumb!',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/04/bloomscape_beginner-bundle_sm-md_charcoal_edited-768x922.jpg?ver=767991',
    rating: 9.4,
    category: 'Low-Maintenance Plants',
    numOfLikes: 0
  },
  {
    id: 11,
    name: 'Hedgehog Aloe',
    price: 39,
    description: 'Delightful succulent with spiked blue-green leaves',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/01/bloomscape_hedgehog-aloe_sm_angle2-768x922.jpg?ver=660071',
    rating: 9.4,
    category: 'Cacti and Succulents',
    numOfLikes: 0
  },
  {
    id: 12,
    name: 'Ponytail Palm',
    price: 79,
    description: 'Fun, distinct, and hardy. This plant is low-maintenance and adaptable.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_ponytail-palm_charcoal-e1625250313933.jpg?ver=279293',
    rating: 9.4,
    category: 'Cacti and Succulents',
    numOfLikes: 0
  },
  {
    id: 13,
    name: 'Ponytail Palm Tree',
    price: 149,
    description: 'A spirited desert-dweller popular for its low-maintenance care, the Ponytail Palm Tree is a larger, more full version of our beloved Ponytail Palm. With its bulb-like trunk and lively, thin leaves that spiral outwards, the Ponytail Palm Tree is a hardy succulent that adds exceptional character to any space.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2020/04/bloomscape_ponytail-palm-tree_v2_large_indigo-768x922.jpeg?ver=581665',
    rating: 9.4,
    category: 'Cacti and Succulents',
    numOfLikes: 0
  },
  {
    id: 14,
    name: 'Tough Stuff Collection',
    price: 79,
    description: 'Three easy and adaptable plants, including a Sansevieria, ZZ Plant, and Hoya variety',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/07/bloomscape_tough-stuff-collection_taupe-768x922.jpg?ver=916047',
    rating: 9.4,
    category: 'Cacti and Succulents',
    numOfLikes: 0
  },
  {
    id: 15,
    name: 'Hedgehog Aloe',
    price: 39,
    description: 'Delightful succulent with spiked blue-green leaves',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/01/bloomscape_hedgehog-aloe_sm_angle2-768x922.jpg?ver=660071',
    rating: 9.4,
    category: 'Cacti and Succulents',
    numOfLikes: 0
  },
  {
    id: 16,
    name: 'Rattan Tray',
    price: 69,
    description: 'Gracefully accent your plants with this natural Rattan Tray. This tray makes it easy to create a gorgeous display of foliage on your coffee table, kitchen island, or dresser. Simply add an array of plants and decor, and your guests will be drawn to the delicate dimension it adds to your space. This tray fits either three small plants, three extra smalls, or one small and one medium plant.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/06/bloomscape_rattan-tray_5-768x922.jpg?ver=902666',
    rating: 9.4,
    category: 'Gift Shop',
    numOfLikes: 0
  },
  {
    id: 17,
    name: 'Bromeliad Aechmea Pink',
    price: 79,
    description: 'Featuring colorful, long-lasting blooms, the Bromeliad Aechmea Pink is a unique flowering plant to add a touch of the tropics to your space. With blooms that last for up to six months, these are sure to brighten any home.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_bromeliad-aechmea-pink_slate-e1625249957301-768x921.jpg?ver=279188',
    rating: 9.4,
    category: 'Gift Shop',
    numOfLikes: 0
  },
  {
    id: 18,
    name: 'Tradescantia Nanouk',
    price: 79,
    description: 'This easy to care for Tradescantia Nanouk boasts delicate creamy green, purple, pink, and white leaves and is the perfect gift for any plant lover. This plant will tolerate lower light, although indirect light will help keep its colors vibrant. This vining plant is perfect for hanging pots and is easily propagated to share with a loved one.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/01/Bloomscape_TradescantiaNanouk_Medium_Indigo-768x960.jpg?ver=651500',
    rating: 9.4,
    category: 'Gift Shop',
    numOfLikes: 0
  },
  {
    id: 19,
    name: 'Round Trellis',
    price: 29,
    description: 'Put the luscious leaves of your trailing plant on display with this dazzling handmade Round Trellis. From monsteras to hoyas, pothos, and more, turn your plant into a show-stopper with this 12” copper wire trellis. Shorter plants can be trained as they grow, but longer plants can simply be wrapped around the wire right away. This makes for a great gift for any plant enthusiast in your life.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/06/bloomscape_round-trellis_3-768x922.jpg?ver=902686',
    rating: 9.4,
    category: 'Gift Shop',
    numOfLikes: 0
  },
  {
    id: 20,
    name: 'Bromeliad Guzmania Yellow',
    price: 39,
    description: 'The Bromeliad Yellow provides an eye-catching and vibrant splash of color in your home. Easy to care for, this plant requires unique watering. Keep the center of the plant, known as the “vase,” halfway filled with water and water the soil infrequently. Keep in indirect light and boost humidity around your plant by using a mister and your plant will thank you by producing pups in the future.',
    link:'',
    img: 'https://bloomscape.com/wp-content/uploads/2022/08/bloomscape_yellow-bromeliad_sm_angle2-768x921.jpg?ver=927247',
    rating: 9.4,
    category: 'Gift Shop',
    numOfLikes: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/