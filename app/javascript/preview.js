if (document.URL.match(/new/) || document.URL.match(/edit/)) {
  document.addEventListener('DOMContentLoaded', function(){
    const ImageList = document.getElementById('image-list');

    // 表示する画像を生成        ↓blobからの引数
    const createImageHTML = (blob) => {
        // 画像生成のためのdiv要素を生成
      const imageElement = document.createElement('div');
  
      // 表示する画像生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      // 生成したHTMLの要素をブラウザに表示させる。
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    };

    document.getElementById('message_image').addEventListener('change', function(e){
      // 画像が表示されてる場合のみ、既に存在する画像を削除する。
      const imageContent = document.querySelector('img');
      if (imageContent){
        imageContent.remove();
      }
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  });
}
