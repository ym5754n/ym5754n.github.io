import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Works } from "@/lib/works";

export default function Watched() {
  return (
    <main>
      <Table>
        <TableBody>
          {Works.map((work, key) => (
            <TableRow key={key} className="flex flex-wrap">
              <TableCell className="basis-full">
                <Link href={work.url}>{work.title}</Link>
              </TableCell>
              <TableCell className="basis-full">
                {work.comment}
              </TableCell>
              <TableCell className="basis-full">
                {work.tags.map((tag, tagKey) => (
                  <Badge className="m-1" key={tagKey}>{tag}</Badge>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}