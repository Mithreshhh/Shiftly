import { Response } from 'express';
import prisma from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';

export const getDepartments = async (req: AuthRequest, res: Response) => {
  try {
    const departments = await prisma.department.findMany({
      where: { organizationId: req.user!.organizationId },
      include: {
        _count: {
          select: { employees: true },
        },
      },
      orderBy: { name: 'asc' },
    });

    res.json(departments);
  } catch (error) {
    console.error('Get departments error:', error);
    res.status(500).json({ message: 'Помилка отримання відділів' });
  }
};

export const createDepartment = async (req: AuthRequest, res: Response) => {
  try {
    const { name, color } = req.body;

    const department = await prisma.department.create({
      data: {
        name,
        color: color || '#6B7280',
        organizationId: req.user!.organizationId,
      },
    });

    res.status(201).json(department);
  } catch (error) {
    console.error('Create department error:', error);
    res.status(500).json({ message: 'Помилка створення відділу' });
  }
};

export const updateDepartment = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, color } = req.body;

    const existingDepartment = await prisma.department.findFirst({
      where: { id, organizationId: req.user!.organizationId },
    });

    if (!existingDepartment) {
      return res.status(404).json({ message: 'Відділ не знайдено' });
    }

    const department = await prisma.department.update({
      where: { id },
      data: { name, color },
    });

    res.json(department);
  } catch (error) {
    console.error('Update department error:', error);
    res.status(500).json({ message: 'Помилка оновлення відділу' });
  }
};

export const deleteDepartment = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const department = await prisma.department.findFirst({
      where: { id, organizationId: req.user!.organizationId },
    });

    if (!department) {
      return res.status(404).json({ message: 'Відділ не знайдено' });
    }

    await prisma.department.delete({ where: { id } });

    res.json({ message: 'Відділ видалено' });
  } catch (error) {
    console.error('Delete department error:', error);
    res.status(500).json({ message: 'Помилка видалення відділу' });
  }
};
