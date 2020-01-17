export const info = [
    {
        sıra: 1,
        bas: 'Kurulum',
        bilgi:
            'Netten git indirilir ve kurulur. Çalışılmak istenen klasör içinde «git config –global user.name xxxxxx» ve «git config global user.email xxxxxxx» girilir. Bu girilen değerler «git config user.name/email» ile gözlemlenebilir. Hatalı giriş varsa «git config –replace-all user.name xxxxx» şeklinde düzeltilebilir.',
    },
    {
        sıra: 2,
        bas: 'Local Repo Oluşturma',
        bilgi:
            '«git init» ile  çalışılmak istenen klasör içinde git local repo su oluşturulur. «git add .» («git add dosya_ismi») Bu komut ile takip olan dosyaları stage kısmına alırız. Bu ekstra bir check-point tir. Bunu yapmadan commit yapamayız. Staged haldeyken commit yapmadan silmek istiyorsak; «git rm --cached dosya_ismi» ile silebiliriz. «git commit –m ‘’commit mesajı’’» bu commit eder. Anlamlı noktalarda commit edilmeli, sürekli commit yapılmamalıdır. Mesaj anlaşılır olmalı ki, sonradan baktığımız zaman ne yaptığımız belli olsun. «git log» ile ayrıntılı log geçmişini gözlemleriz. «git log –oneline» ile daha sade log geçmişi gözlemleriz.',
    },
    {
        sıra: 3,
        bas: 'Undoing Things-1',
        bilgi:
            '3 şekilde commit edilmiş bir işlemi değiştirebiliriz. Bunlar; Checkout->Revert->Reset. Safe den Unsafe e doğru gideceğiz.  Checkout: bununla gözlem yapma şansımız olur. Fakat değişiklik yapamayız. «git checkout log_numarası» bununla gözlemleriz. «git checkout master» ile master brancha geri döneriz. Revert: Bununla commiti commit ile geri düzeltiriz. Yani başka bir commit ile yapılmış olan işlemi tersine getiririz. «git revert log_numarı» bunu yaptığımız zaman bir uyarı ekranı benzeri bir ekran görürüz. Buna «:wq» ekleyip enterlayarak işlemi sonlandırabiliriz.',
    },
    {
        sıra: 4,
        bas: 'Undoing Things-2',
        bilgi:
            'Reset: bu işlemi yaparken dikkatli olmak gerekir çünkü geri dönüşü yoktur. «git reset log_numarası» Log numarasına kadar olanları commitleri tutar ondan sonra yapılmış olanları siler. Fakat editörde görmeye devam ederiz ve istersek yeni bir commit ile ekleyebiliriz. (Fazla commit yapmışsak ve azaltmak istiyorsak bir yöntem olabilir ama tavsiye etmem ) «git reset log_numarası --hard» bu commite kadar olanların hepsini siler geri dönüş yoktur.',
    },
    {
        sıra: 5,
        bas: 'Branches-1',
        bilgi:
            '«git branch isim» yeni branch ekler. «git branch –a» tüm branchları gösterir, listeler. «git checkout isim» isim branch ına geçiş yaptırır. «git checkout master» master brancha gider.',
    },
    {
        sıra: 6,
        bas: 'Branches-2',
        bilgi:
            'Hem yeni branch oluşturmak hem de o branch a geçiş yapmanın kolay yolu, «git checkout -b master»dır. Silmek için, master branch da olmak gerekir.Merge yapılmış bir branch ı silmek için «git branch -d isim», merge yapılmamış bir branchı silmek için «git branch -D isim» yapılmalıdır.',
    },
    {
        sıra: 7,
        bas: 'Merge',
        bilgi:
            'Her zaman mastardayken bu işlem yapılır. «git merge branch_ismi» eğer çakışma yoksa işlem tamamlanır. Eğer çakışma var ve uyarı veriyorsa, ilgili düzeltmeler yapıldıktan sonra «git add .» ve «git commit» yapılır. (-m ‘’mesaj’’ kısmına gerek yoktur. Bu yapılınca uyarı çıkacaktır. «:wq» yapılarak işlem tamamlanır.',
    },
    {
        sıra: 8,
        bas: 'Git Hub-1',
        bilgi:
            'Eğer bir projeye başlanıyorsa, önce github reposu oluşturulur sonra bu boş repo yerele clone yapılır. Bu sayede daha az işlem ile hem git başlatılmış olur hem de remote bağlantısı kurulmuş olur. İki şekilde yapılabilir. Localde projemiz var github a koyacağız yada localde yok git hub da bulunan (yada yeni boş oluşturduğumuz) repoyu locale çekeceğiz. Sırayla bakalım.',
    },
    {
        sıra: 9,
        bas: 'Git Hub-2',
        bilgi:
            'Burada ana mantığımız localdekini remote’a push yapmak. Git Hub da repo oluşturulur. Urlsi kopyalanır. Proje klasöründeki terminalden «git push url master» yapılır. (master branch ismi olarak geçer. Bu işlem 10sn kadar sürebilir.) Normalde yapılan her push komutunu «git push url master» şeklinde yapman gerekir. url yi her seferinde yazmak makul değil. Bu yüzden, url yi «remote» olarak tanımlayacağız.«git remote add origin url» şeklinde tanımlama yapılır. Origin repoya verdiğimiz isimdir. Herkes bu ismi kullanır. Artık «git push origin master» yapmak yeterlidir.',
    },

    {
        sıra: 10,
        bas: 'Git Hub-3',
        bilgi:
            'Şimdi ise senaryomuz, localde proje yok, github dan alacağız. Bu durumda başlangıç noktamız «clone» olacaktır.Önce github da repo oluşurulur. README ile birlikte oluşturulması tavsiye edilir. url kopyalanır.Yerelde projeyi oluşturulacağı klasöre git (yada bir üst klasöre). Tek yapmak gereken «git clone url». Artık repo hem local hem github da üstelik bağlantısı da kurulmuş şekilde.',
    },

    {
        sıra: 11,
        bas: 'Git Hub-4',
        bilgi:
            '«git remote -v» ile bağlantı gözlemlenebilir. Sonrasında «git push origin master» ile yapılan işlemleri iletebiliriz.',
    },

    {
        sıra: 12,
        bas: 'Git Hub Collobrating-1',
        bilgi:
            'Birden fazla kişi ile çalışılan projelerde, Localde bir repo var github ile uptodate tutmak için projemi «pull» yaparım. Master branchında «git pull origin master» ile bu işlemi gerçekleştiririm.',
    },
    {
        sıra: 13,
        bas: 'Git Hub Collobrating-2',
        bilgi:
            'Genelde yapılan değişiklikler master üzerinde yapılmaz. Bunun yerine projede çalıştığım alan ile ilgili localde yeni branch oluştururum. İstediğim işlemleri yaptıktan sonra «git push origin branch_ismi» ile yeni branchı ve yaptığım işlemleri push ederim. Sonra asıl yönetici bu değişiklikleri uygun görürse github üzerinden «merge» edecek.',
    },

    {
        sıra: 14,
        bas: 'Git Hub Fork-1',
        bilgi:
            'Aynı projenin kopyasını oluşturup, kendi github hesabımıza koymamızı sağlar. Public olan tüm repolara bu işlemi yapabiliriz. Sonra kendi repomuzdaki bu kopyayı yerele «clone» ederiz ve yerel yaptığımız işlemleri kendi repomuza «push» ederiz. Peki çalışmamız bitti ve artık asıl repo sahibine bunları iletmemiz gerekiyor. Bu durumda ne yapacağız? Cevap: «pull request» yapacağız.',
    },
    {
        sıra: 15,
        bas: 'Git Hub Fork-2',
        bilgi:
            'Git hub üzerinden «pull request» yaparız. Fakat burada bize doğal olarak «merge» yetkisi vermeyecektir. Bunu asıl yetkili yapacak. Asıl yetkili projenin «pull request» bölümünü kontrol edecek, burada yapılmış olan işlemleri görüp değerlendirecek ve uygun görürse «merge» yapacak ve işlem tamamlanmış olacak.',
    },
    { sıra: 16, bas: 'Son', bilgi: 'Notlar burada sona ermektedir. Bilgi paylaştıkça çoğalır...' },
]
