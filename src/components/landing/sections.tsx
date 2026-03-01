import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  { icon: "Camera", title: "Фото-отчёты", desc: "Бригады присылают фото с геометкой прямо с объекта" },
  { icon: "ClipboardList", title: "Задачи и этапы", desc: "Ставьте задачи, отслеживайте выполнение по каждому этапу" },
  { icon: "Bell", title: "Уведомления", desc: "Мгновенные оповещения о нарушениях и задержках" },
  { icon: "BarChart2", title: "Аналитика", desc: "Статистика по объектам, срокам и затратам в одном экране" },
]

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-3xl">
      {features.map((f) => (
        <div key={f.title} className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="mt-0.5 text-[#FF4D00] shrink-0">
            <Icon name={f.icon as Parameters<typeof Icon>[0]["name"]} size={22} />
          </div>
          <div>
            <div className="text-white font-semibold text-base mb-1">{f.title}</div>
            <div className="text-neutral-400 text-sm leading-relaxed">{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/5">Контроль стройки в реальном времени</Badge>,
    title: "Стройка под контролем. Всегда.",
    content: "Приложение для руководителей и прорабов, которое устраняет хаос на объекте.",
    showButton: true,
    buttonText: 'Попробовать бесплатно'
  },
  {
    id: 'about',
    title: 'Зачем это нужно?',
    content: 'Срывы сроков, потеря материалов, несогласованность между прорабами — всё это стоит денег. Приложение собирает всё в одном месте и даёт полную картину происходящего на объекте.'
  },
  {
    id: 'features',
    title: 'Что умеет приложение',
    featuresGrid: true,
  },
  {
    id: 'testimonials',
    title: 'Результаты на практике',
    content: 'Строительные компании, внедрившие систему, сократили просрочки по этапам на 40% и вдвое снизили количество переработок из-за недоразумений между бригадами.'
  },
  {
    id: 'join',
    title: 'Возьмите объект под контроль',
    content: 'Начните уже сегодня. Первый объект — бесплатно. Просто зарегистрируйтесь и добавьте свою стройку.',
    showButton: true,
    buttonText: 'Начать бесплатно'
  },
]
