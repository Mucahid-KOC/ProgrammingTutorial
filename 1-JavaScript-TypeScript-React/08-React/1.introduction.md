React uygulamanız, Webpack gibi bir "bundler" tarafından oluşturulur ve bu araç, tüm kaynak dosyalarını (JavaScript, HTML, CSS vb.) bir araya getirir. İşte bu işlemin nasıl çalıştığı:

Webpack ve Build Süreci
Webpack ve benzeri araçlar: create-react-app gibi araçlar, Webpack adlı bir bundler kullanır. Webpack, uygulamanızdaki tüm dosyaları (HTML, JavaScript, CSS vb.) derleyip paketler ve birbiriyle bağlantılı hale getirir. Sonuç olarak, public klasöründeki index.html dosyası ve src klasöründeki index.js dosyası, Webpack tarafından birbirine bağlanır.

HTML ve JavaScript İlişkisi: Uygulamanız çalıştırıldığında, tarayıcı önce index.html dosyasını yükler. Bu dosya, Webpack tarafından derlenen ve index.js dosyasını içeren bir <script> etiketi içerir. Bu JavaScript dosyası, index.html dosyasındaki root elementini bulur ve React bileşenlerinizi buraya yerleştirir.

Yol Yapısı: Webpack, index.html dosyasının farklı bir klasörde bulunmasına rağmen, dosyalar arası bağlantıyı doğru bir şekilde kurar. document.getElementById('root') ifadesi çalıştırıldığında, tarayıcı zaten index.html dosyasını yüklemiş durumda olduğu için, bu HTML dosyasındaki id="root" olan <div> öğesini kolayca bulur.

Özetle, index.js ve index.html dosyaları farklı klasörlerde bulunsa da, Webpack gibi araçlar bu dosyaları birlikte çalışacak şekilde paketler ve tarayıcı bu ilişkileri çözerek doğru şekilde işlem yapar. Bu nedenle, document.getElementById('root'), tarayıcıya zaten yüklenmiş olan index.html dosyasındaki id="root" öğesini bulur ve React bileşenlerinizi buraya yerleştirir.


## peki wepback nedir? projenin neresinde bulunur?

Webpack, modern JavaScript uygulamalarını geliştirmek için kullanılan bir modül bağlayıcısıdır (bundler). Uygulamanızdaki JavaScript, CSS, HTML, görüntüler gibi çeşitli dosyaları alır ve bunları tarayıcının anlayabileceği optimize edilmiş bir pakete dönüştürür. Webpack, özellikle büyük projelerde tüm dosyaları bir araya getirip, bağımlılıkları çözmek ve kodu küçültmek için kullanılır.

Webpack'in Görevleri:
Modül Bağlayıcısı: Uygulamanızdaki tüm dosyaları (modülleri) birbirine bağlar ve tek bir dosyada toplar.
Bağımlılık Yönetimi: JavaScript dosyalarınızın diğer dosyalara bağımlılıklarını yönetir.
Dosya Dönüşümü: CSS, SASS, TypeScript gibi farklı dosya türlerini JavaScript'e dönüştürebilir.
Kod Küçültme: Üretim ortamı için kodunuzu optimize edip, küçülterek performansı artırır.
Webpack Nerede Bulunur?
Eğer create-react-app gibi bir araçla React projesi oluşturduysanız, Webpack projede doğrudan görünmez. Ancak, perde arkasında çalışır. Bu tür projelerde, Webpack yapılandırması sizin için gizlenmiştir. Bu nedenle, webpack.config.js gibi bir dosya doğrudan projenizde bulunmaz.

Webpack ile Çalışmak
Eğer Webpack'i doğrudan yapılandırmak istiyorsanız, create-react-app projenizde Webpack yapılandırmasına erişmek için iki seçeneğiniz vardır:

Eject Komutu Kullanmak:

npm run eject komutunu çalıştırarak Webpack yapılandırması gibi gizlenmiş ayarları açığa çıkarabilirsiniz. Ancak, bu işlem geri alınamaz ve yapılandırmaların manuel olarak yönetilmesini gerektirir.
Özel Yapılandırmalar: Webpack'i özelleştirmek için, react-app-rewired gibi araçlar kullanarak mevcut yapılandırmayı değiştirebilirsiniz. Bu yöntem, projeyi "eject" etmeden yapılandırmalarınızı düzenlemenizi sağlar.

Projenizde Webpack'in Çalışma Süreci:
Geliştirme Ortamı: Webpack, geliştirme sunucusunu başlatır ve kod değişikliklerinizi izleyerek otomatik olarak tarayıcıda günceller.
Üretim Ortamı: Üretim için uygulamanızı derlerken, Webpack tüm dosyalarınızı optimize eder, küçültür ve build klasörüne yerleştirir.
Webpack, modern web uygulamalarının geliştirilmesinde güçlü ve esnek bir araçtır, ancak create-react-app gibi araçlar kullanıldığında, bu karmaşıklığın büyük bir kısmı sizden gizlenir.


## peki react projesini bundler kullanmadan sıfırdan kendim kurmak istesem nasıl yaparım?

React projesini sıfırdan, bir bundler (örneğin, Webpack) kullanmadan kurmak, daha manuel bir süreçtir, ancak size daha fazla kontrol sağlar. Aşağıda adım adım nasıl yapabileceğinizi açıklıyorum:

1. Proje Dizini Oluşturun
Öncelikle, projeniz için bir dizin oluşturun ve içine geçin:

mkdir react-from-scratch
cd react-from-scratch
2. NPM Başlatın
Projenizi bir Node.js projesi olarak başlatın:


npm init -y
Bu komut, projenizin kök dizininde bir package.json dosyası oluşturur.

3. React ve ReactDOM Paketlerini Yükleyin
React ve ReactDOM'u projenize ekleyin:

npm install react react-dom
4. Proje Yapısını Oluşturun
Proje yapınızı aşağıdaki gibi düzenleyin:


react-from-scratch/
│
├── index.html
├── index.js
├── App.js
└── package.json

5. HTML Dosyanızı Oluşturun
Kök dizinde bir index.html dosyası oluşturun. Bu dosya, React uygulamanızın monte edileceği kök elemente sahip olacak:


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React from Scratch</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>

6. JavaScript Dosyanızı Oluşturun
Kök dizinde index.js dosyasını oluşturun ve React bileşenlerinizi buraya yazın:


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
7. Basit Bir React Bileşeni Oluşturun
Bir App.js dosyası oluşturun ve basit bir React bileşeni yazın:


import React from 'react';

const App = () => {
  return <h1>Hello, React from Scratch!</h1>;
};

export default App;

8. Babel ile JSX Desteği Ekleyin
Tarayıcılar doğrudan JSX'i anlayamaz, bu nedenle Babel'i kullanarak JSX'i standart JavaScript'e dönüştürmeniz gerekiyor. Bunun için Babel'i kurun:

npm install @babel/core @babel/cli @babel/preset-react @babel/preset-env
Daha sonra, kök dizinde bir .babelrc dosyası oluşturun ve aşağıdaki yapılandırmayı ekleyin:


{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
9. Babel ile Dönüştürme
JavaScript dosyanızı Babel ile dönüştürmek için şu komutu çalıştırın:


npx babel index.js --out-file bundle.js
Bu komut, index.js dosyasını Babel aracılığıyla dönüştürür ve sonucu bundle.js olarak kaydeder.

10. HTML Dosyanızı Güncelleyin
HTML dosyanızda, index.js yerine bundle.js dosyasını çağırın:

<script src="bundle.js"></script>
11. Bir Geliştirme Sunucusu Kurun
Kodunuzu test etmek için basit bir geliştirme sunucusu kurabilirsiniz. live-server veya http-server gibi araçlar kullanabilirsiniz:

npx live-server
Bu sunucu, projenizi çalıştırır ve tarayıcınızda açar.

12. Projeyi Çalıştırın
Son olarak, projenizi tarayıcıda çalıştırmak için sunucuyu başlatın ve değişikliklerinizi görebilirsiniz.

Bu adımlar, React projenizi sıfırdan kurmanıza olanak tanır. Bu yaklaşım, manuel yapılandırma gerektirir ve bundler kullanmanın getirdiği avantajları sunmaz. Ancak, süreç üzerinde tam kontrol sahibi olmanızı sağlar ve React'in temel çalışma prensiplerini anlamanıza yardımcı olur.