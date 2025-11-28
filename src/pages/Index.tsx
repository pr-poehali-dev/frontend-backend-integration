import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { date: "01.11", revenue: 450000, expenses: 180000, profit: 270000 },
  { date: "08.11", revenue: 520000, expenses: 195000, profit: 325000 },
  { date: "15.11", revenue: 680000, expenses: 210000, profit: 470000 },
  { date: "22.11", revenue: 590000, expenses: 205000, profit: 385000 },
  { date: "29.11", revenue: 720000, expenses: 220000, profit: 500000 },
];

const expensesByCategory = [
  { name: "Аренда", value: 150000, color: "#9b87f5" },
  { name: "Зарплата", value: 280000, color: "#0EA5E9" },
  { name: "Маркетинг", value: 95000, color: "#F97316" },
  { name: "Коммунальные", value: 65000, color: "#8B5CF6" },
  { name: "Оборудование", value: 85000, color: "#D946EF" },
];

const franchiseeStats = [
  { name: "Москва Центр", revenue: 1250000, games: 48, profit: 875000, trend: "+12%" },
  { name: "СПБ Невский", revenue: 980000, games: 38, profit: 686000, trend: "+8%" },
  { name: "Казань Центр", revenue: 850000, games: 35, profit: 595000, trend: "+15%" },
  { name: "Екатеринбург", revenue: 720000, games: 29, profit: 504000, trend: "+5%" },
];

const dealsData = {
  new: [
    {
      id: 1,
      title: "День рождения Алексея",
      participants: 12,
      amount: 60000,
      contact: "Алексей Иванов",
      phone: "+7 999 123-45-67",
      date: "2025-12-05",
      priority: "high",
    },
    {
      id: 2,
      title: "Корпоратив IT компании",
      participants: 25,
      amount: 125000,
      contact: "Мария Петрова",
      phone: "+7 999 234-56-78",
      date: "2025-12-10",
      priority: "medium",
    },
  ],
  negotiation: [
    {
      id: 3,
      title: "Детский праздник",
      participants: 15,
      amount: 75000,
      contact: "Елена Смирнова",
      phone: "+7 999 345-67-89",
      date: "2025-12-08",
      priority: "medium",
    },
  ],
  prepaid: [
    {
      id: 4,
      title: "Тимбилдинг Альфа Банк",
      participants: 30,
      amount: 180000,
      contact: "Дмитрий Козлов",
      phone: "+7 999 456-78-90",
      date: "2025-12-12",
      priority: "high",
    },
  ],
  scheduled: [
    {
      id: 5,
      title: "Выпускной 11 класс",
      participants: 20,
      amount: 100000,
      contact: "Ольга Васильева",
      phone: "+7 999 567-89-01",
      date: "2025-12-15",
      priority: "medium",
    },
  ],
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpenses = revenueData.reduce((sum, item) => sum + item.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;
  const totalGames = franchiseeStats.reduce((sum, f) => sum + f.games, 0);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
  };

  const renderDealCard = (deal: any) => (
    <Card
      key={deal.id}
      className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-card border-border"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
          {deal.title}
        </h4>
        <Badge variant="outline" className={getPriorityColor(deal.priority)}>
          {deal.priority === "high" ? "Важно" : "Обычно"}
        </Badge>
      </div>
      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Icon name="Users" size={14} />
          <span>{deal.participants} чел.</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Calendar" size={14} />
          <span>{new Date(deal.date).toLocaleDateString("ru-RU")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Phone" size={14} />
          <span>{deal.phone}</span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Сумма</span>
          <span className="font-bold text-primary">
            {deal.amount.toLocaleString("ru-RU")} ₽
          </span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">QuestLegends OS</h1>
                <p className="text-xs text-muted-foreground">
                  Управляющая компания
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium">Иван Петров</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/50">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="crm" className="gap-2">
              <Icon name="Users" size={16} />
              CRM
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <Icon name="TrendingUp" size={16} />
              Аналитика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Выручка</span>
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {(totalRevenue / 1000000).toFixed(1)}М ₽
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  +15% к прошлому месяцу
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Чистая прибыль
                  </span>
                  <Icon name="DollarSign" size={20} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {(netProfit / 1000000).toFixed(1)}М ₽
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Маржа {((netProfit / totalRevenue) * 100).toFixed(0)}%
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10 border-orange-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Игр</span>
                  <Icon name="Gamepad2" size={20} className="text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {totalGames}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  За текущий месяц
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Франшиз</span>
                  <Icon name="Building2" size={20} className="text-green-500" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {franchiseeStats.length}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Активных</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="Trophy" size={20} className="text-yellow-500" />
                Топ локаций по выручке
              </h3>
              <div className="space-y-3">
                {franchiseeStats.map((f, idx) => (
                  <div
                    key={f.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{f.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {f.games} игр
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        {(f.revenue / 1000).toFixed(0)}К ₽
                      </p>
                      <Badge
                        variant="outline"
                        className="text-green-500 border-green-500/20"
                      >
                        {f.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="crm" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Канбан сделок</h2>
              <Button className="gap-2">
                <Icon name="Plus" size={16} />
                Новая сделка
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-sm">Новые заявки</h3>
                  <Badge variant="secondary">{dealsData.new.length}</Badge>
                </div>
                <div className="space-y-3">
                  {dealsData.new.map(renderDealCard)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-sm">Переговоры</h3>
                  <Badge variant="secondary">
                    {dealsData.negotiation.length}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {dealsData.negotiation.map(renderDealCard)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-sm">Предоплата</h3>
                  <Badge variant="secondary">{dealsData.prepaid.length}</Badge>
                </div>
                <div className="space-y-3">
                  {dealsData.prepaid.map(renderDealCard)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-sm">Назначена</h3>
                  <Badge variant="secondary">
                    {dealsData.scheduled.length}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {dealsData.scheduled.map(renderDealCard)}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Динамика доходов и расходов
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#9b87f5"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#9b87f5"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorExpenses"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#F97316"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#F97316"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="date" style={{ fontSize: "12px" }} />
                    <YAxis style={{ fontSize: "12px" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#9b87f5"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                      name="Выручка"
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stroke="#F97316"
                      fillOpacity={1}
                      fill="url(#colorExpenses)"
                      name="Расходы"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="PieChart" size={20} className="text-secondary" />
                  Структура расходов
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expensesByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expensesByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6 lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="BarChart3" size={20} className="text-green-500" />
                  Прибыль по периодам
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="date" style={{ fontSize: "12px" }} />
                    <YAxis style={{ fontSize: "12px" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar
                      dataKey="profit"
                      fill="#0EA5E9"
                      radius={[8, 8, 0, 0]}
                      name="Прибыль"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
