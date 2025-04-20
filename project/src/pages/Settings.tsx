import React, { useState } from 'react';
import { Save, Mail, Lock, Bell, Trash2, Database, RefreshCw } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-64 flex-shrink-0">
          <div className="card overflow-hidden">
            <nav className="space-y-1">
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'account'
                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('account')}
              >
                <Mail className={`mr-3 h-5 w-5 ${
                  activeTab === 'account' ? 'text-primary-500' : 'text-gray-400'
                }`} />
                Account
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'security'
                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('security')}
              >
                <Lock className={`mr-3 h-5 w-5 ${
                  activeTab === 'security' ? 'text-primary-500' : 'text-gray-400'
                }`} />
                Security
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'notifications'
                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell className={`mr-3 h-5 w-5 ${
                  activeTab === 'notifications' ? 'text-primary-500' : 'text-gray-400'
                }`} />
                Notifications
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium ${
                  activeTab === 'data'
                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('data')}
              >
                <Database className={`mr-3 h-5 w-5 ${
                  activeTab === 'data' ? 'text-primary-500' : 'text-gray-400'
                }`} />
                Data Management
              </button>
            </nav>
          </div>
        </div>
        
        <div className="flex-1">
          {activeTab === 'account' && (
            <div className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 input"
                    defaultValue="user@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 input"
                    defaultValue="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="mt-1 input"
                    defaultValue="Acme Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                    Timezone
                  </label>
                  <select id="timezone" className="mt-1 input">
                    <option>Asia/Jakarta (GMT+7)</option>
                    <option>Asia/Singapore (GMT+8)</option>
                    <option>Australia/Sydney (GMT+10)</option>
                    <option>America/New_York (GMT-4)</option>
                    <option>Europe/London (GMT+1)</option>
                  </select>
                </div>
                
                <div className="flex justify-end pt-5">
                  <button className="btn btn-primary">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Change Password</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="current_password" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current_password"
                        className="mt-1 input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new_password"
                        className="mt-1 input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirm_password"
                        className="mt-1 input"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-base font-medium text-gray-900">Two-Factor Authentication</h3>
                  <div className="mt-2 text-sm text-gray-500">
                    Add additional security to your account using two-factor authentication.
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-outline">
                      Enable Two-Factor Authentication
                    </button>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-base font-medium text-gray-900">Sessions</h3>
                  <div className="mt-2 text-sm text-gray-500">
                    Manage your active sessions on different devices.
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-outline text-error-600 hover:bg-error-50 hover:text-error-700 hover:border-error-300">
                      Sign Out All Devices
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end pt-5 border-t border-gray-200">
                  <button className="btn btn-primary">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Email Notifications</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email_updates"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email_updates" className="font-medium text-gray-700">Product updates</label>
                        <p className="text-gray-500">Get notified about Shopee product trends and price changes.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email_competitor"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email_competitor" className="font-medium text-gray-700">Competitor activity</label>
                        <p className="text-gray-500">Get notified when competitors change pricing or add new products.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email_keyword"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email_keyword" className="font-medium text-gray-700">Keyword alerts</label>
                        <p className="text-gray-500">Get notified when your tracked keywords show significant changes.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email_marketing"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email_marketing" className="font-medium text-gray-700">Marketing emails</label>
                        <p className="text-gray-500">Receive tips, product updates, and offers from our team.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-base font-medium text-gray-900">Notification Frequency</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                        Email Digest Frequency
                      </label>
                      <select id="frequency" className="mt-1 input">
                        <option>Real-time</option>
                        <option>Daily summary</option>
                        <option>Weekly summary</option>
                        <option>Monthly summary</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end pt-5 border-t border-gray-200">
                  <button className="btn btn-primary">
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'data' && (
            <div className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Data Management</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Data Export</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Export all your research data in CSV or Excel format.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <button className="btn btn-outline">
                      Export as CSV
                    </button>
                    <button className="btn btn-outline">
                      Export as Excel
                    </button>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-base font-medium text-gray-900">Clear Search History</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Clear your search history from the system.
                  </p>
                  <div className="mt-4">
                    <button className="btn btn-outline text-error-600 hover:bg-error-50 hover:text-error-700 hover:border-error-300">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Search History
                    </button>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-base font-medium text-gray-900">Sync Settings</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Control how your data is synced with Shopee.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="sync_interval" className="block text-sm font-medium text-gray-700">
                        Sync Interval
                      </label>
                      <select id="sync_interval" className="input py-1 text-sm">
                        <option>Every 6 hours</option>
                        <option>Every 12 hours</option>
                        <option>Daily</option>
                        <option>Manual only</option>
                      </select>
                    </div>
                    <button className="btn btn-outline flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Sync Now
                    </button>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-base font-medium text-error-600">Danger Zone</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Permanently delete your account and all associated data.
                  </p>
                  <div className="mt-4">
                    <button className="btn btn-outline bg-error-50 text-error-600 border-error-300 hover:bg-error-100">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;