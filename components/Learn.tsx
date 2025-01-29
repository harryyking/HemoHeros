"use client"
import React from 'react';
import { Droplet } from 'lucide-react';

const BloodTypeInfo = () => {
  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-4xl">
      <div className="card-body space-y-8">
        {/* Blood Groups */}
        <section>
          <h2 className="card-title text-2xl mb-4">Blood Groups</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['A', 'B', 'AB', 'O'].map((type) => (
              <div key={type} className="card bg-base-200 hover:scale-105 transition-transform">
                <div className="card-body items-center p-4">
                  <div className="flex items-center space-x-2">
                    <Droplet className="text-error" />
                    <span className="text-xl font-bold">{type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rh Factor */}
        <section>
          <h2 className="card-title text-2xl mb-4">Rh Factor</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="alert alert-success">
              <div className="flex items-center">
                <span className="font-bold mr-2">Positive (+):</span>
                <span>Has Rh antigen</span>
              </div>
            </div>
            <div className="alert alert-info">
              <div className="flex items-center">
                <span className="font-bold mr-2">Negative (-):</span>
                <span>No Rh antigen</span>
              </div>
            </div>
          </div>
        </section>

        {/* Special Types */}
        <section>
          <h2 className="card-title text-2xl mb-4">Universal Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-success text-success-content">
              <div className="card-body items-center text-center">
                <Droplet className="w-8 h-8 animate-pulse" />
                <h3 className="text-xl font-bold">O Negative (O-)</h3>
                <div className="badge badge-outline">Universal Donor</div>
                <p>Can donate to all blood types</p>
              </div>
            </div>
            <div className="card bg-primary text-primary-content">
              <div className="card-body items-center text-center">
                <Droplet className="w-8 h-8 animate-pulse" />
                <h3 className="text-xl font-bold">AB Positive (AB+)</h3>
                <div className="badge badge-outline">Universal Recipient</div>
                <p>Can receive from all blood types</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility Table */}
        <section>
          <h2 className="card-title text-2xl mb-4">Quick Compatibility Guide</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Blood Type</th>
                  <th>Can Give To</th>
                  <th>Can Receive From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">O-</td>
                  <td>All blood types</td>
                  <td>O-</td>
                </tr>
                <tr>
                  <td className="font-bold">O+</td>
                  <td>O+, A+, B+, AB+</td>
                  <td>O+, O-</td>
                </tr>
                <tr>
                  <td className="font-bold">AB+</td>
                  <td>AB+</td>
                  <td>All blood types</td>
                </tr>
                <tr>
                  <td className="font-bold">AB-</td>
                  <td>AB+, AB-</td>
                  <td>All negative types</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BloodTypeInfo;