export enum ItemType {
  SNEAKER = 'SNEAKER',
  CLOTHING = 'CLOTHING',
  COLLECTIBLE = 'COLLECTIBLE',
  OTHER = 'OTHER',
}

export enum ActivityType {
  CREATED = 'CREATED',
  EDITED = 'EDITED',
  SOLD = 'SOLD',
  DELETED = 'DELETED',
  WAREHOUSE_TRANSFER = 'WAREHOUSE_TRANSFER',
  MANIFEST_ADD = 'MANIFEST_ADD',
  MANIFEST_REMOVE = 'MANIFEST_REMOVE',
  BULK_SKU_UPDATE = 'BULK_SKU_UPDATE',
  SALE_DELETED = 'SALE_DELETED',
}

export type InventoryItem = {
  id: string;
  name: string;
  sku?: string;
  type: ItemType;
  size?: string;
  brand?: string;
  imageUrl?: string;
  purchasePrice: number;
  purchaseDate: string;
  warehouseId?: string;
  tags?: string[];
};

export type Warehouse = { id: string; name: string };

export type Sale = {
  id: string;
  itemId: string;
  itemName: string;
  itemImageUrl?: string;
  itemType: ItemType;
  itemBrand?: string;
  purchasePrice: number;
  purchaseDate: string;
  salePrice: number;
  saleDate: string;
  salePlatform?: string;
  fees?: number;
  shippingCost?: number;
  profit: number;
  roi: number;
  daysInStock: number;
  warehouseId?: string;
  sku?: string;
  tags?: string[];
};

export type Credential = { id: string; type: string; siteName: string; notes?: string; username?: string; password?: string };

export type SkuInfo = { id: string; sku: string; name?: string; type?: ItemType; brand?: string; imageUrl?: string };

export type Expenditure = { id: string; amount: number; date: string; category?: string; notes?: string };

export type ShippingManifestItem = { itemId: string; salePrice?: number };
export type ShippingManifest = { id: string; name: string; items: ShippingManifestItem[]; status?: 'Draft' | 'Shipped'; destinationWarehouseId?: string; shippedAt?: string };

export type ActivityLogEntry = { id: string; itemId: string; itemName: string; itemSku?: string; timestamp: string; type: ActivityType; description: string };

export type AuditReport = { id: string; createdAt: string; summary: string; itemsChecked?: number };

export type Profile = {
  id: string;
  name: string;
  inventory: InventoryItem[];
  warehouses: Warehouse[];
  sales: Sale[];
  credentials: Credential[];
  skuDatabase: SkuInfo[];
  expenditures: Expenditure[];
  shippingManifests: ShippingManifest[];
  activityLog: ActivityLogEntry[];
  audits: AuditReport[];
  theme?: string;
};

export type AppData = { profiles: Profile[]; activeProfileId: string | null };