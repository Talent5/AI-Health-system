import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Heart, FileText, Activity, Calendar } from 'lucide-react';

const healthData = [
  { date: 'Mon', heartRate: 72, steps: 8000 },
  { date: 'Tue', heartRate: 75, steps: 10000 },
  { date: 'Wed', heartRate: 71, steps: 7500 },
  { date: 'Thu', heartRate: 73, steps: 9000 },
  { date: 'Fri', heartRate: 74, steps: 8500 },
  { date: 'Sat', heartRate: 70, steps: 11000 },
  { date: 'Sun', heartRate: 76, steps: 7000 },
];

function PatientDashboard() {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard
                title="Heart Rate"
                value="72 bpm"
                trend="Normal"
                icon={Heart}
                color="red"
              />
              <DashboardCard
                title="Active Claims"
                value="2"
                trend="In Progress"
                icon={FileText}
                color="blue"
              />
              <DashboardCard
                title="Daily Steps"
                value="8,547"
                trend="+12.5%"
                icon={Activity}
                color="green"
              />
              <DashboardCard
                title="Next Appointment"
                value="Mar 15"
                trend="In 3 days"
                icon={Calendar}
                color="purple"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Weekly Health Trends</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="heartRate"
                        stroke="#EF4444"
                        name="Heart Rate"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="steps"
                        stroke="#10B981"
                        name="Steps"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Health Insights</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-medium text-green-800">Great Progress!</h4>
                    <p className="text-sm text-green-600">
                      Your activity level has improved by 15% this week.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800">Upcoming Check-up</h4>
                    <p className="text-sm text-blue-600">
                      Remember your annual check-up on March 15th at 10:00 AM.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <h4 className="font-medium text-yellow-800">Medication Reminder</h4>
                    <p className="text-sm text-yellow-600">
                      Don't forget to take your evening medication at 8:00 PM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm"><boltAction type="file" filePath="src/pages/patient/Dashboard.tsx">              <h3 className="text-lg font-semibold mb-4">Recent Claims</h3>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    type: 'Medical Consultation',
                    date: 'Mar 10, 2024',
                    amount: '$150',
                    status: 'Processing',
                  },
                  {
                    id: 2,
                    type: 'Laboratory Tests',
                    date: 'Mar 5, 2024',
                    amount: '$275',
                    status: 'Approved',
                  },
                  {
                    id: 3,
                    type: 'Prescription Medication',
                    date: 'Feb 28, 2024',
                    amount: '$85',
                    status: 'Completed',
                  },
                ].map((claim) => (
                  <div
                    key={claim.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div>
                        <h4 className="font-medium">{claim.type}</h4>
                        <p className="text-sm text-gray-500">
                          {claim.date} • {claim.amount}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        claim.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : claim.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {claim.status}
                    </span>
                  </div>
                ))}
              </div>
              </boltAction>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

function DashboardCard({
  title,
  value,
  trend,
  icon: Icon,
  color,
}: {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
  color: string;
}) {
  const colors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${colors[color]} bg-opacity-10`}>
          <Icon className={`w-6 h-6 text-${color}-500`} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-semibold">{value}</p>
            <span className="text-sm text-gray-500">{trend}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;