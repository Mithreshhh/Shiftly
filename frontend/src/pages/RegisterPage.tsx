import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/auth.service';
import { useAuthStore } from '../store/authStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Calendar } from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    organizationName: '',
  });
  const [error, setError] = useState('');

  const registerMutation = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      setUser(data.user);
      navigate('/schedule');
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || 'Помилка реєстрації');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    registerMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Calendar className="h-12 w-12 text-primary-500" />
          <h1 className="ml-3 text-3xl font-bold text-gray-900">Shiftly</h1>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">Реєстрація</h2>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Ваше ім'я"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Іван Іваненко"
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />

          <Input
            label="Назва організації"
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
            placeholder="Моя компанія"
          />

          <Input
            label="Пароль"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="••••••••"
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            isLoading={registerMutation.isPending}
          >
            Зареєструватися
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Вже є обліковий запис?{' '}
          <Link to="/login" className="text-primary-500 hover:text-primary-600 font-medium">
            Увійти
          </Link>
        </p>
      </div>
    </div>
  );
}
