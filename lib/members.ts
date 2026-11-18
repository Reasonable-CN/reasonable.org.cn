export type TeamMember = {
    nick: string;
    qq: number;
};

export const teamMembers: TeamMember[] = [
    {nick: 'AlabTNT', qq: 1765035944},
    {nick: 'MoonCake__MC', qq: 3416099122},
    {nick: '红红冬冬', qq: 3467798349},
    {nick: '知猫', qq: 1367808860},
    {nick: 'Essien', qq: 541721498},
    {nick: 'Alex3236', qq: 2706992599},
    {nick: 'CuH棕土', qq: 1543169063},
    {nick: '熊鲜森', qq: 1539788060},
    {nick: '弄臣', qq: 33161276},
    {nick: 'Royal 坂', qq: 3382086138},
    {nick: 'Phska', qq: 3242148095},
    {nick: '雨落无痕', qq: 1295561029},
    {nick: '1270', qq: 3552698466},
    {nick: 'AftRaining', qq: 3450274815},
    {nick: 'Maker', qq: 3568584766},
    {nick: 'Nirotire', qq: 2870471753},
    {nick: '沙雕于小黑', qq: 3460332146},
    {nick: '鸭鸭生的小澄', qq: 443401353},
    {nick: '松易涅', qq: 2564241732},
    {nick: 'DustyCanyon', qq: 1226134493},
    {nick: 'skdzz', qq: 2366267016},
];

export function memberAvatarUrl(qq: number, size = 640) {
    return `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=${size}`;
}
