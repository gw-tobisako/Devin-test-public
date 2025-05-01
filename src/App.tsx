import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from './components/ui/button'
import { ArrowRight, CheckCircle, Globe, Code, Building } from 'lucide-react'
import './App.css'

function App() {
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    })
  }, [controls])

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/cambodia-skyline.jpg" 
            alt="Cambodia Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
          <div className="flex items-center">
            <img src="./images/gridworld-logo.png" alt="GridWorld Logo" className="h-10" />
            <span className="ml-2 text-white text-xl font-bold">GridWorld 合同会社</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#" className="hover:text-yellow-400 transition-colors">ホーム</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">サービス</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">会社概要</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">お問い合わせ</a>
          </div>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
            お問い合わせ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
        
        <motion.div 
          className="container mx-auto px-6 z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            お客様の継続利用率90%の実績<br />
            <span className="text-yellow-400">DX開発に関する高品質のオフショア</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            カンボジアのトップ理系大学を卒業した経験豊富なIT技術者と、ビジネス日本語に精通したブリッジSEを擁するGridWorldは、お客様に安価かつ高品質なサービスをご提供し、DX成功に向けてサポートします。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-6 rounded-md">
              お問い合わせ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              ソリューション
              <div className="h-1 w-24 bg-yellow-500 mx-auto mt-2"></div>
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              GridWorldは、カンボジアのオフショア開発チームを活用し、様々なソリューションを提供しています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-yellow-500 mb-4">
                <Code size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Web・アプリ開発</h3>
              <p className="text-gray-600">
                最新技術を活用したWebアプリケーション、モバイルアプリの開発を行います。UI/UXデザインから実装、テスト、運用まで一貫してサポートします。
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-yellow-500 mb-4">
                <Building size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">業務系システム開発</h3>
              <p className="text-gray-600">
                企業の業務効率化を実現する基幹システム、ERPシステム、CRMなどの開発を行います。要件定義から保守運用まで対応します。
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-yellow-500 mb-4">
                <Globe size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">DXコンサルティング</h3>
              <p className="text-gray-600">
                デジタルトランスフォーメーションを成功させるための戦略立案、システム設計、導入支援を行います。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                なぜ GridWorld のカンボジア開発チームなのか？
                <div className="h-1 w-24 bg-yellow-500 mt-2"></div>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                GridWorldは、テレワーク時代のDXスペシャリストとして、カンボジアの優秀なエンジニアと日本のビジネスをつなぎます。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p>カンボジアのトップ大学出身の優秀なエンジニアチーム</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p>日本語対応可能なブリッジSEによるスムーズなコミュニケーション</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p>コストパフォーマンスに優れた開発体制</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p>アジャイル開発による迅速な対応と高品質な成果物</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 md:pl-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">お客様の声</h3>
                <p className="text-gray-600 italic mb-6">
                  「GridWorldのカンボジア開発チームは、技術力の高さと日本語でのコミュニケーション能力に驚きました。プロジェクトの納期も品質も満足しています。」
                </p>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">TK</div>
                  <div className="ml-4">
                    <p className="font-bold">田中 健太</p>
                    <p className="text-sm text-gray-500">株式会社テクノソリューション CTO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              お問い合わせ
              <div className="h-1 w-24 bg-yellow-500 mx-auto mt-2"></div>
            </motion.h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              カンボジアオフショア開発についてのご質問やお見積もりなど、お気軽にお問い合わせください。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="山田 太郎" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">会社名</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="株式会社〇〇" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="example@company.co.jp" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="03-xxxx-xxxx" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容</label>
                  <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="お問い合わせ内容をご記入ください"></textarea>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3">
                  送信する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="./images/gridworld-logo.png" alt="GridWorld Logo" className="h-10 mb-4" />
              <p className="text-gray-400">
                GridWorldは、テレワーク時代のDXスペシャリストとして、カンボジアの優秀なエンジニアと日本のビジネスをつなぎます。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Web・アプリ開発</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">業務系システム開発</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">DXコンサルティング</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">採用情報</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">ニュース</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
              <p className="text-gray-400 mb-2">お気軽にご連絡ください</p>
              <a href="mailto:info@gridworld.co" className="text-yellow-400 hover:underline">info@gridworld.co</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} GridWorld合同会社. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
