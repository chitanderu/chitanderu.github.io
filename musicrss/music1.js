
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
        name: '君に吹く風',
        artist: '下川美娜',
        url: 'https://cdn.jsdelivr.net/gh/chitanderu/asoul2d@latest/%E5%90%9B%E3%81%AB%E5%90%B9%E3%81%8F%E9%A2%A8.mp3',
        cover: 'https://pic.imgdb.cn/item/64395b5c0d2dde577725723e.jpg '
    },
    {
        name: '打上花火',
        artist: 'Danko',
        url: 'https://cdn.jsdelivr.net/gh/chitanderu/asoul2d@latest/huahuo.mp3',
        cover: 'https://pic.imgdb.cn/item/6487d3b41ddac507cc1c49a6.jpg '
    },
    {
        name: 'アイドル',
        artist: 'Yosobi',
        url: 'https://cdn.jsdelivr.net/gh/chitanderu/asoul2d@latest/oshi.mp3',
        cover: 'https://pic.imgdb.cn/item/6487d4ad1ddac507cc1e9bcc.jpg '
    }
]
});