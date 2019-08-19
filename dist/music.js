const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false, //自动播放
    fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    audio: [
      {
        name: "像鱼",
        artist: '王贰浪',
        url: 'http://music.163.com/song/media/outer/url?id=1331819951.mp3',
        cover: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=6909d14e0724ab18f41be96554938da8/f7246b600c338744d0971b145f0fd9f9d72aa003.jpg',
        lrc: 'http://music.163.com/api/song/media?id=1331819951',
    },
       
    {
       name: "这一生关于你的风景",
       artist: '枯木逢春',
       url: 'http://music.163.com/song/media/outer/url?id=1356350562.mp3',
       cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=07271b9bd7f9d72a0369184fb5434351/30adcbef76094b36b1c46449adcc7cd98d109d3b.jpg',
       lrc: 'http://music.163.com/api/song/media?id=1356350562',
    },

    {
        name: "角落",
        artist: '彭席彦',
        url: 'http://music.163.com/song/media/outer/url?id=1381773905.mp3',
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=42341ed70455b31988f48a2722c0e943/342ac65c103853431605d5f79d13b07ecb80881a.jpg',
        lrc: 'http://music.163.com/api/song/media?id=1381773905',
     },

     {
        name: "失眠飞行",
        artist: '接个吻，开一枪 / 沈以诚 / 薛明媛',
        url: 'http://music.163.com/song/media/outer/url?id=1365898499.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565949168889&di=b7fe2657ae7a3c81f695036f10a745b4&imgtype=0&src=http%3A%2F%2Fimgessl.kugou.com%2Fstdmusic%2F20190609%2F20190609050505653826.jpg',
        lrc: 'http://music.163.com/api/song/media?id=1365898499',
     },

     {
        name: "Steady Me",
        artist: 'Hollyn / Aaron Cole',
        url: 'http://music.163.com/song/media/outer/url?id=507795651.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565949324949&di=8d5470b42a5b03e71d2f404ef1210bf1&imgtype=0&src=http%3A%2F%2Flastfm-img2.akamaized.net%2Fi%2Fu%2F300x300%2F0d10676de7abedc9812facfa375e29a9.jpg',
        lrc: 'http://music.163.com/api/song/media?id=507795651',
     },

     {
        name: "那女孩对我说",
        artist: 'Uu',
        url: 'http://music.163.com/song/media/outer/url?id=1372796676.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565949451852&di=48bd3db2198a4f5df18103e7bd18f6b9&imgtype=0&src=http%3A%2F%2Fimgessl.kugou.com%2Fstdmusic%2F20190620%2F20190620220743443390.jpg',
        lrc: 'http://music.163.com/api/song/media?id=1372796676',
     },

     {
        name: "Beautiful Girl",
        artist: '레게 강 같은 평화 (RGP) / 权正烈',
        url: 'http://music.163.com/song/media/outer/url?id=30987373.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565949595786&di=98f76c3b23e5a77127e30c5e4b5e4f14&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201307%2F04%2F20130704130404_mnzss.thumb.700_0.jpeg',
        lrc: 'http://music.163.com/api/song/media?id=30987373',
     },

     {
        name: "Five Hundred Miles",
        artist: 'Justin Timberlake / Carey Mulligan / Stark Sands',
        url: 'http://music.163.com/song/media/outer/url?id=27759600.mp3',
        cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2496324893,231159369&fm=26&gp=0.jpg',
        lrc: 'http://music.163.com/api/song/media?id=27759600',
     },

     {
        name: "儿时",
        artist: '刘昊霖',
        url: 'http://music.163.com/song/media/outer/url?id=407761576.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4209520483,3288586506&fm=26&gp=0.jpg',
        lrc: 'http://music.163.com/api/song/media?id=407761576',
     },

     {
        name: "下一站茶山刘",
        artist: '房东的猫',
        url: 'http://music.163.com/song/media/outer/url?id=486188245.mp3',
        cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1092155676,612239658&fm=26&gp=0.jpg',
        lrc: 'http://music.163.com/api/song/media?id=486188245',
     },

     {
        name: "春风十里",
        artist: '鹿先森乐队',
        url: 'http://music.163.com/song/media/outer/url?id=38576323.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565950060870&di=7c8f5672def08c879cdde2d90b95a35b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01db7558d3a34aa801219c7780d0a9.jpg',
        lrc: 'http://music.163.com/api/song/media?id=38576323',
     },

     {
        name: "南下",
        artist: '徐海俏',
        url: 'http://music.163.com/song/media/outer/url?id=414706021.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565950177478&di=2acf55ac67318109e00085f874b3e550&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Ffbf69b4d984a826913f8ed51ffa1683b580d47bf.jpg',
        lrc: 'http://music.163.com/api/song/media?id=414706021',
     },

     {
        name: "归来",
        artist: '满江',
        url: 'http://music.163.com/song/media/outer/url?id=403710591.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565950312342&di=19b9ebcb1da44884b49c911d1c7c6994&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3Dd7bc8f80c0177f3e1034fe0d40f44afa%2F3c6d55fbb2fb43166b56674c29a4462309f7d3be.jpg',
        lrc: 'http://music.163.com/api/song/media?id=403710591',
     },

     {
        name: "再见悲哀",
        artist: '林忆莲',
        url: 'http://music.163.com/song/media/outer/url?id=28838055.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565950417623&di=9f081ee4b3cb728fe872a0264f0568d2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201709%2F24%2F20170924142319_jnHwe.thumb.700_0.jpeg',
        lrc: 'http://music.163.com/api/song/media?id=28838055',
     },

     {
        name: "我曾",
        artist: '隔壁老樊',
        url: 'http://music.163.com/song/media/outer/url?id=1336856777.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565950566939&di=2592992f56fd6ac19a4e1d773bc14592&imgtype=0&src=http%3A%2F%2Fm.iqiyipic.com%2Fu6%2Fimage%2F20190320%2F65%2Fb9%2Fuv_36172146009_d_601_480_360.jpg',
        lrc: 'http://music.163.com/api/song/media?id=1336856777',
     },

     {
        name: "四块五",
        artist: '隔壁老樊',
        url: 'http://music.163.com/song/media/outer/url?id=1365221826.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565950683010&di=6f53c04edf7b3fe696bd2d8e61bea952&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fwap720%2Fea6caf10ly1g4fhwu5fpej20u00i0gms.jpg',
        lrc: 'http://music.163.com/api/song/media?id=1365221826',
     },

     {
        name: "钟无艳",
        artist: '谢安琪',
        url: 'http://music.163.com/song/media/outer/url?id=308353.mp3',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1878493562,2293775801&fm=26&gp=0.jpg',
        lrc: 'http://music.163.com/api/song/media?id=308353',
     },

     {
        name: "爱情转移",
        artist: '陈奕迅',
        url: 'http://music.163.com/song/media/outer/url?id=65536.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
        lrc: 'http://music.163.com/api/song/media?id=65536',
     },

     {
      name: "티라미수 케익",
      artist: 'We Are the Night',
      url: 'http://music.163.com/song/media/outer/url?id=35447760.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=35447760',
   },

   {
      name: "这个年纪",
      artist: '齐一',
      url: 'http://music.163.com/song/media/outer/url?id=35476049.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=35476049',
   },

   {
      name: "삐삐",
      artist: 'IU',
      url: 'http://music.163.com/song/media/outer/url?id=1316563427.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=1316563427',
   },

   {
      name: "作曲家",
      artist: '李荣浩',
      url: 'http://music.163.com/song/media/outer/url?id=29764562.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=29764562',
   },

   {
      name: "太阳（Cover：邱振哲） ",
      artist: '野区歌神',
      url: 'http://music.163.com/song/media/outer/url?id=1339648907.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=1339648907',
   },

   {
      name: "爸爸妈妈 ",
      artist: '李荣浩',
      url: 'http://music.163.com/song/media/outer/url?id=407450223.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=407450223',
   },

   {
      name: "年少有为 ",
      artist: '李荣浩',
      url: 'http://music.163.com/song/media/outer/url?id=1293886117.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=1293886117',
   },

   {
      name: "我从崖边跌落 ",
      artist: '谢春花',
      url: 'http://music.163.com/song/media/outer/url?id=415086030.mp3',
      cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025300632,3455263669&fm=26&gp=0.jpg',
      lrc: 'http://music.163.com/api/song/media?id=415086030',
   },


    
    ]
});

//实现切换音频时，根据音频的封面图片自适应主题色
const colorThief = new ColorThief();
const setTheme = (index) => {
  if (!ap.list.audios[index].theme) {
    colorThief.getColorAsync(ap.list.audios[index].cover, function(color) {
      ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
    });
  }
};
setTheme(ap.list.index);
ap.on('listswitch', (data) => {
  setTheme(data.index);
});
