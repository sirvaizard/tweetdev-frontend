import { formatDistanceToNow, isBefore, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function formatDate(date: Date): string {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  if(isBefore(date, yesterday)) {
    return format(date, 'd MMM yyyy', { locale: ptBR })
  }

  return formatDistanceToNow(date, { locale: ptBR }) + ' atrás'
}