enum Membership {
    Simple,
    Standart,
    Premium
}

//по умолчанию каждая переменная enum получает индекс 0,1,2
const membership = Membership.Standart
//выведет 1
console.log(membership)
//Выведет premium так как обратились по индексу
//Membership это массив
const membershipReverse = Membership[2];
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)