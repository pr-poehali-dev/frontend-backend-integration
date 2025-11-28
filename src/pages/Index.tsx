import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const routes = [
  {
    from: "Новокузнецк",
    to: "Шерегеш",
    price: 2500,
    duration: "2.5 часа",
    icon: "Plane",
  },
  {
    from: "Кемерово",
    to: "Шерегеш",
    price: 4500,
    duration: "4 часа",
    icon: "Train",
  },
  {
    from: "Новосибирск",
    to: "Шерегеш",
    price: 8500,
    duration: "7 часов",
    icon: "Car",
  },
  {
    from: "Горнолыжный курорт",
    to: "Аэропорт/Вокзал",
    price: 2800,
    duration: "По запросу",
    icon: "MapPin",
  },
];

const benefits = [
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Опытные водители с большим стажем, исправные автомобили",
  },
  {
    icon: "Clock",
    title: "Пунктуальность",
    description: "Встретим вовремя, доставим точно в срок",
  },
  {
    icon: "Heart",
    title: "Комфорт",
    description: "Современные автомобили, Wi-Fi, климат-контроль",
  },
  {
    icon: "DollarSign",
    title: "Фиксированная цена",
    description: "Без скрытых платежей и неожиданных доплат",
  },
  {
    icon: "Users",
    title: "Группы до 18 человек",
    description: "Организуем трансфер для любой компании",
  },
  {
    icon: "Snowflake",
    title: "Зимняя резина",
    description: "Все автомобили подготовлены к горным условиям",
  },
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    route: "",
    date: "",
    passengers: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 15 минут",
    });
    setFormData({ name: "", phone: "", route: "", date: "", passengers: "1" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div
        className="relative bg-cover bg-center min-h-[600px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=2000')",
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Icon name="Mountain" size={14} className="mr-1" />
                Горнолыжный курорт
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Трансфер в <br />
                <span className="text-blue-400">Шерегеш</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Комфортные поездки из аэропорта и вокзала на курорт. Встретим с
                табличкой, поможем с багажом и довезём безопасно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (923) 555-00-00
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>

            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Calendar" size={24} className="text-blue-500" />
                Забронировать трансфер
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="route">Маршрут</Label>
                  <select
                    id="route"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    value={formData.route}
                    onChange={(e) =>
                      setFormData({ ...formData, route: e.target.value })
                    }
                    required
                  >
                    <option value="">Выберите маршрут</option>
                    <option value="novokuznetsk">Новокузнецк → Шерегеш</option>
                    <option value="kemerovo">Кемерово → Шерегеш</option>
                    <option value="novosibirsk">Новосибирск → Шерегеш</option>
                    <option value="back">Шерегеш → Аэропорт/Вокзал</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="passengers">Пассажиров</Label>
                    <Input
                      id="passengers"
                      type="number"
                      min="1"
                      max="18"
                      value={formData.passengers}
                      onChange={(e) =>
                        setFormData({ ...formData, passengers: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Популярные маршруты</h2>
          <p className="text-lg text-muted-foreground">
            Фиксированные цены без скрытых платежей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, idx) => (
            <Card
              key={idx}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Icon name={route.icon as any} size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{route.from}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Icon name="ArrowRight" size={16} />
                <span className="text-sm">{route.to}</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  {route.duration}
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">от</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {route.price.toLocaleString()} ₽
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Цена зависит от количества пассажиров и времени суток
          </p>
          <Button size="lg" variant="outline">
            <Icon name="Calculator" size={18} className="mr-2" />
            Рассчитать точную стоимость
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">
              Более 5000 довольных клиентов за последний сезон
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <Icon name={benefit.icon as any} size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Как заказать трансфер?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Оставьте заявку</h3>
                  <p className="text-muted-foreground">
                    Заполните форму на сайте или позвоните нам
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Получите подтверждение
                  </h3>
                  <p className="text-muted-foreground">
                    Менеджер свяжется с вами в течение 15 минут
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Встреча и поездка</h3>
                  <p className="text-muted-foreground">
                    Водитель встретит вас с табличкой в назначенное время
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <h3 className="text-2xl font-bold mb-6">Остались вопросы?</h3>
            <p className="mb-6 text-blue-100">
              Свяжитесь с нами любым удобным способом, и мы с радостью поможем
              организовать ваш трансфер
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Icon name="Phone" size={24} />
                <span>+7 (923) 555-00-00</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Icon name="Mail" size={24} />
                <span>info@sheregesh-transfer.ru</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Icon name="Clock" size={24} />
                <span>Работаем круглосуточно</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-sm text-blue-100 mb-4">Мы в соцсетях:</p>
              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/30 hover:bg-white/20"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/30 hover:bg-white/20"
                >
                  <Icon name="Send" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/30 hover:bg-white/20"
                >
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Icon name="Mountain" size={24} className="text-blue-400" />
                Шерегеш Трансфер
              </h3>
              <p className="text-slate-400 text-sm">
                Надёжный трансфер на горнолыжный курорт Шерегеш из любой точки
                Кузбасса и Новосибирска
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Популярные маршруты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Новокузнецк — Шерегеш</li>
                <li>Кемерово — Шерегеш</li>
                <li>Новосибирск — Шерегеш</li>
                <li>Трансфер из аэропорта</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+7 (923) 555-00-00</li>
                <li>info@sheregesh-transfer.ru</li>
                <li>г. Новокузнецк</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            © 2025 Шерегеш Трансфер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
