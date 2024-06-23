import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { skills } from "@/lib/skills";

export default function Home() {
  return (
    <div className="grid gap-3 grid-cols-3">
      <div className="col-span-3 md:col-span-1 grid justify-center items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/29919765?v=4"
          alt="プロフィール画像"
          width={200}
          height={200}
        />
      </div>
      <div className="col-span-3 md:col-span-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>プロフィール</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p>滋賀県在住のWEBエンジニア。大学・大学院で電気電子工学を学んだ後に自動車部品メーカーでエンジン制御回路の設計に従事。その後IT業界へ転職し、現在５年目です。WEBサービスの自社開発企業でバックエンドエンジニアとしてキャリアをスタートし、現在は開発部署のマネージャーとして業務に従事しています。コードを触ることは少なくなりましたが、小さな会社なので、機能の企画・設計はもちろんのこと、AWSの運用やお客様向けのお知らせページの構築・運用、障害対応フローの構築、ISMS運用、開発部署のマネジメント、事業計画の策定や採用業務など、幅広く業務に取り組んでいます。</p>
                <p>実務ではあまり自分で書くことはありませんが、新しい技術のキャッチアップ（実際はほぼ自分の興味ですが）を目的に業務後や休日にReactなどのフロントエンド技術を学んでいます。</p>
                <p>趣味は映画鑑賞で、好きな映画はMad Max: Fury Road（マッドマックス怒りのデスロード）。</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="col-span-3">
        <Table>
          <TableCaption>１：軽く触った程度　２：趣味で触ってるor実務で触ってるがもう少し習熟が必要、３：実務で触ってる</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>スキルセット</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <div className="grid gap-3 grid-cols-3">
              <div className="col-span-3 md:col-span-1">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Back-end</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {skills.backend.map((skill, key) => (
                      <TableRow key={key}>
                        <TableCell>{skill.content}</TableCell>
                        <TableCell>{skill.rate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="col-span-3 md:col-span-1">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Front-end</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {skills.frontend.map((skill, key) => (
                      <TableRow key={key}>
                        <TableCell>{skill.content}</TableCell>
                        <TableCell>{skill.rate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="col-span-3 md:col-span-1">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>DevOps</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {skills.devops.map((skill, key) => (
                      <TableRow key={key}>
                        <TableCell>{skill.content}</TableCell>
                        <TableCell>{skill.rate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TableBody>
        </Table>
      </div>
      <div className="col-span-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>資格</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>取得年</TableHead>
                  <TableHead>資格</TableHead>
                  <TableHead>内容</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2013</TableCell>
                  <TableCell>運転免許</TableCell>
                  <TableCell>AT限定メガネ有り、準中型まで運転可能</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2019</TableCell>
                  <TableCell>TOEIC 930点</TableCell>
                  <TableCell>1年の留学経験があり、日常会話レベルなら英語でのやりとりが可能</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024(予定)</TableCell>
                  <TableCell>応用情報技術者</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024(予定)</TableCell>
                  <TableCell>AWS SAA</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableBody>
        </Table>  
      </div>
    </div>
  );
}
